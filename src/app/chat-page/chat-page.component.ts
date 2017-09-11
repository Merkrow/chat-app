import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { UserService, User, SocketService } from 'app/shared';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  @ViewChild('video') video: any;
  @ViewChild('audioCall') audioCall: any;
  @ViewChild('audioReceive') audioReceive: any;
  isAuthenticated = false;
  user: User;
  popup = false;
  chosenUser: string;
  showFriends = false;
  calling = false;
  ringer: User;
  receiver: User;
  pc: any;
  callSettings: any;
  callStatus: string;
  counter: any;
  moment = moment;
  timer: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private socketService: SocketService,
  ) { }

  startCounter() {
    this.counter = moment.duration(this.counter.asMilliseconds() + 1000);
  }

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(isAuth => {
        this.isAuthenticated = isAuth;
        if (!isAuth) {
          this.router.navigateByUrl('/login');
        }
    });
    this.userService.currentUser.subscribe(user => {
      if (!this.user && user._id || this.user && this.user._id !== user._id) {
        this.socketService.connect(user._id);
        this.socketService.emit('online users', { friends: user.friends, id: user._id })
        .subscribe(online => online);
        this.socketService.on('user update').subscribe(newUser => {
          this.userService.changeUser(newUser);
        });
        this.socketService.on(`return description ${user._id}`)
        .subscribe(({ description, ringer, receiver, callSettings }) => {
          if (!this.pc) {
            this.prepareCall();
          }
          if (description.type === 'offer') {
            this.audioCall.nativeElement.play();
            this.calling = true;
            this.ringer = ringer;
            this.receiver = this.user;
            this.callSettings = callSettings;
            this.pc.setRemoteDescription(new RTCSessionDescription(description));
            return;
          }
          if (description.type === 'answer') {
            this.receiver = receiver;
            this.audioReceive.nativeElement.pause();
            this.counter = moment.duration({ seconds: 0, minutes: 0 });
            this.timer = window.setInterval(this.startCounter.bind(this), 1000);
            this.pc.setRemoteDescription(new RTCSessionDescription(description));
            return;
          }
          if (description.candidate) {
            this.pc.addIceCandidate(new RTCIceCandidate(description));
          }
          if (description.closeConnection) {
            this.audioCall.nativeElement.pause();
            this.audioReceive.nativeElement.pause();
            this.pc.close();
            this.pc = null;
            window.clearInterval(this.timer);
            if (this.callSettings.video) {
              this.video.nativeElement.src = '';
            }
            this.counter = null;
            this.calling = false;
            this.ringer = null;
            this.receiver = null;
            this.callStatus = '';
          }
        });
      }
      this.user = user;
    });
  }

  streamError(error) {
    console.log(error);
  }

  acceptCall() {
    navigator.mediaDevices.getUserMedia(this.callSettings).then((stream) => {
      this.pc.addStream(stream);
      this.createAndSendAnswer();
    }, (error) => console.log(error));
  }

  createAndSendAnswer() {
    this.audioCall.nativeElement.pause();
    this.callStatus = 'receiver';
    this.counter = moment.duration({ seconds: 0, minutes: 0 });
    this.timer = window.setInterval(this.startCounter.bind(this), 1000);
    this.pc.createAnswer(
      (answer) => {
        const ans = new RTCSessionDescription(answer);
        this.pc.setLocalDescription(ans, () => {
            this.socketService.emit('call description', { description: ans, ringer: this.ringer, receiver: this.user })
            .subscribe(data => data);
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  }


  prepareCall() {
    this.pc = new RTCPeerConnection([]);
    this.pc.onicecandidate = this.onIceCandidateHandler.bind(this);
    this.pc.onaddstream = this.gotRemoteStream.bind(this);
  }

  onIceCandidateHandler(event) {
    if (!event || !event.candidate) {
      return;
    }
    this.socketService.emit('call description', { description: event.candidate, ringer: this.ringer, receiver: this.receiver })
    .subscribe(data => data);
  }

  gotRemoteStream(event) {
    const _video = this.video.nativeElement;
      _video.src = URL.createObjectURL(event.stream);
      _video.play();
  }

  initCall({ ringer, receiver, callSettings }) {
    this.prepareCall();
    this.callSettings = callSettings;
    navigator.mediaDevices.getUserMedia(callSettings).then((stream) => {
      this.pc.addStream(stream);
      this.createAndSendOffer();
    }, function(error) { console.log(error); });
    this.ringer = ringer;
    this.receiver = receiver;
  }

  createAndSendOffer() {
    this.callStatus = 'ringer';
    this.calling = true;
    this.audioReceive.nativeElement.play();
    this.pc.createOffer(
      (offer) => {
        const off = new RTCSessionDescription(offer);
        this.pc.setLocalDescription(new RTCSessionDescription(off),
          () => {
            this.socketService.emit('call description', {
              description: off,
              ringer: this.ringer,
              receiver: this.receiver,
              callSettings: this.callSettings
            })
            .subscribe(data => data);
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  }

  rejectCall() {
    this.socketService.emit('call description', { description: { closeConnection: true }, receiver: this.receiver, ringer: this.ringer })
    .subscribe(data => data);
  }

  toggleShowFriends(status: boolean) {
    this.showFriends = status;
  }

  triggerPopup($event: boolean) {
    this.popup = $event;
  }

}
