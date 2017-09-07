import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, User, SocketService } from 'app/shared';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  @ViewChild('video') video: any;
  isAuthenticated = false;
  user: User;
  popup = false;
  chosenUser: string;
  showFriends = false;
  calling = false;
  ringer: User;
  receiver: User;
  pc: any;
  sd: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(this.gotStream.bind(this), this.streamError);
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
        .subscribe(({ description, ringer, receiver }) => {
          if (description.type === 'offer') {
            this.calling = true;
            this.ringer = ringer;
            this.pc.setRemoteDescription(new RTCSessionDescription(description));
          }
          if (description.type === 'answer') {
            this.pc.setRemoteDescription(new RTCSessionDescription(description));
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
    this.createAnswer();
  }

  gotStream(stream) {
    this.pc = new RTCPeerConnection([]);
    this.pc.addStream(stream);
    this.pc.onicecandidate = this.gotIceCandidate.bind(this);
    this.pc.onaddstream = this.gotRemoteStream.bind(this);
  }

  gotRemoteStream(event) {
    const _video = this.video.nativeElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        _video.src = window.URL.createObjectURL(stream);
        _video.play();
      });
    }
  }

  gotLocalDescription(description) {
    this.pc.setLocalDescription(new RTCSessionDescription(description));
    this.socketService.emit('call description', { description, ringer: this.ringer, receiver: this.receiver })
    .subscribe(data => data);
  }

  initCall({ ringer, receiver }) {
    this.ringer = ringer;
    this.receiver = receiver;
    this.createOffer();
  }

  createOffer() {
    this.pc.createOffer(
      this.gotLocalDescription.bind(this),
      function (error) { console.log(error); },
      { 'mandatory': { 'OfferToReceiveAudio': true, 'OfferToReceiveVideo': true } }
    );
  }

  createAnswer() {
    this.pc.createAnswer(
      this.gotLocalDescription.bind(this),
      function(error) { console.log(error); },
      { 'mandatory': { 'OfferToReceiveAudio': true, 'OfferToReceiveVideo': true } }
    );
  }

  gotIceCandidate(event) {
    if (event.candidate) {
      this.socketService.emit('call description',
      { description: {
        type: 'candidate',
        label: event.candidate.sdpMLineIndex,
        id: event.candidate.sdpMid,
        candidate: event.candidate.candidate
      }}).subscribe(data => data);
    }
}

  rejectCall() {
    this.socketService.emit('reject call', { ringer: this.ringer._id, receiver: this.user._id }).subscribe(data => data);
    this.calling = false;
  }

  toggleShowFriends(status: boolean) {
    this.showFriends = status;
  }

  triggerPopup($event: boolean) {
    this.popup = $event;
  }

}
