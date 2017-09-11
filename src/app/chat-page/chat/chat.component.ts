import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef, EventEmitter, Output, AfterViewChecked } from '@angular/core';
import * as moment from 'moment';

import { SocketService, User, SelectChatService, UserService, } from 'app/shared';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnChanges, AfterViewChecked {
  @ViewChild('chat') private myScrollContainer: ElementRef;
  @ViewChild('audio') audio: any;
  @Input() user: User;
  @Output() initCall = new EventEmitter<any>();
  messages: any[];
  message = '';
  room: any;
  interlocutors: User[] = [];
  private = false;
  isFriends = false;
  moment = moment;
  typingNames: any = new Set();
  pending = true;
  accepted = true;

  constructor(
    private socketService: SocketService,
    private selectChat: SelectChatService,
    private userService: UserService,
  ) { }

  ngAfterViewChecked() {
    this.scroll();
  }

  startTyping() {
    this.socketService.emit('user typing', { userName: this.user.fullName, roomId: this.room._id })
    .subscribe(res => res);
  }

  renderNames() {
    return Array.from(this.typingNames).filter(name => name !== this.user.fullName).join(', ');
  }

  ngOnChanges(changes) {
    if (changes.user) {
      this.selectChat.getChatIdEmitter()
      .subscribe(room => {
        if (!room) {
          this.pending = false;
          this.accepted = false;
          return;
        }
        this.room = room;
        this.isFriends = true;
        this.accepted = true;
        this.pending = true;
        this.messages = [];
        this.interlocutors = [];
        if (room === null) {
          return;
        }

        this.socketService.on(`message response ${room._id}`)
        .subscribe(message => {
          this.messages = this.messages.concat(message);
          if (message.sender !== this.user._id) {
            this.audio.nativeElement.play();
          }
          this.socketService.emit('read messages', { roomId: this.room._id, userId: this.user._id })
          .subscribe(data => data);
        });


        this.socketService.on(`typing emit to ${room._id}`)
        .subscribe(name => {
          this.typingNames.add(name);
          setTimeout(() => {
            this.typingNames.delete(name);
          }, 3000);
        });

        const interlocutorsId = room.users.filter(userId => userId !== this.user._id);
        if (interlocutorsId.length === 1) {
          this.private = true;
        }

        this.room.users.map(friendId => {
          if (friendId === this.user._id) {
            return;
          }
          this.socketService.on(`update user ${this.user._id} ${friendId}`)
          .subscribe(newFriend => {
            this.interlocutors = this.interlocutors.map(prev => {
              if (prev._id === newFriend._id) {
                return newFriend;
              }
              return prev;
            });
            this.messages = [];
            this.pending = this.user.friends.some(frId => frId === newFriend._id);
            this.accepted = newFriend.friends.some(frId => frId === this.user._id);
            this.isFriends = this.pending && this.accepted;
            if (this.isFriends || !this.pending && !this.accepted) {
              this.socketService.emit('get messages', this.room._id)
              .subscribe(data => data);
            }
          });
        });

        interlocutorsId.map(id => {

          this.userService.getUserById(id)
          .subscribe(interlocutor => {
            this.interlocutors = this.interlocutors.concat(interlocutor);
            if (this.private) {
              this.messages = [];
              this.pending = changes.user.currentValue.friends.some(friendId => friendId === interlocutor._id);
              this.accepted = this.interlocutors[0].friends.some(friendId => friendId === this.user._id);
              this.isFriends = this.pending && this.accepted;
              if (this.isFriends || !this.pending && !this.accepted) {
                this.socketService.emit('get messages', this.room._id)
                .subscribe(data => data);
              }
            }

          });

        });
      });

      this.socketService.on(`update user ${this.user._id}`)
      .subscribe(newUser => {
        this.userService.changeUser(newUser);
      });

    }
  }

  scroll() {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  ngOnInit() {
    this.selectChat.getChatIdEmitter()
    .subscribe(room => {
      if (!room) {
        this.pending = false;
        this.accepted = false;
        return;
      }
      this.room = room;
      this.message = '';
      this.isFriends = true;
      this.accepted = true;
      this.pending = true;
      this.interlocutors = [];
      if (room === null) {
        return;
      }
      this.messages = [];

      this.socketService.on(`messages response ${this.room._id}`)
      .subscribe(messages => {
        this.messages = messages;
        this.scroll();
      });

      const interlocutorsId = room.users.filter(userId => userId !== this.user._id);
      if (interlocutorsId.length === 1) {
        this.private = true;
      }


      interlocutorsId.map(id => {

        this.userService.getUserById(id)
        .subscribe(interlocutor => {
          this.interlocutors = this.interlocutors.concat(interlocutor);
          if (this.private) {
            this.messages = [];
            this.pending = this.user.friends.some(frId => frId === interlocutor._id);
            this.accepted = interlocutor.friends.some(frId => frId === this.user._id);
            this.isFriends = this.pending && this.accepted;
            if (this.isFriends || !this.pending && !this.accepted) {
              this.socketService.emit('get messages', this.room._id)
              .subscribe(data => data);
            }
          }
        });

      });
    });
  }

  getImage(msg) {
    const usr = this.interlocutors.find(interlocutor => interlocutor._id === msg.sender);
    return usr && usr.picture || './assets/images/noavatar.png';
  }

  sortMsgs(messages) {
    return messages && messages.sort((msg1, msg2) => moment(msg1.date).valueOf() - moment(msg2.date).valueOf());
  }

  callUser() {
    if (!this.isFriends || !this.interlocutors.length) {
      return;
    }
    this.initCall.emit({ ringer: this.user, receiver: this.interlocutors[0], callSettings: { audio: true } });
  }

  videoCallUser() {
    if (!this.isFriends || !this.interlocutors.length) {
      return;
    }
    this.initCall.emit({ ringer: this.user, receiver: this.interlocutors[0], callSettings: { audio: true, video: true } });
  }

  acceptFriend() {
    this.socketService.emit('update user', {
      userId: this.user._id,
      friendId: this.interlocutors[0]._id,
      update: { friends: this.user.friends.concat(this.interlocutors[0]._id) }
    })
    .subscribe(data => data);
  }

  sendMessage() {
    if (!this.message.length) {
      return;
    }
    this.socketService.emit('chat message', {
      userId: this.user._id,
      date: moment().format(),
      chatId: this.room._id,
      text: this.message,
      usersViewed: [this.user._id],
    })
    .subscribe(response => response);
    this.message = '';
  }

}
