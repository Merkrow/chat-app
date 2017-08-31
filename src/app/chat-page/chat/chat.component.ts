import { Component, OnInit, OnChanges, AfterViewChecked, Input, ViewChild, ElementRef, } from '@angular/core';
import * as moment from 'moment';

import { SocketService, User, SelectChatService, UserService, } from '../../shared';

function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked, OnChanges {
  @ViewChild('chat') private myScrollContainer: ElementRef;
  @Input() user: User;
  messages: any[];
  message = '';
  room: any;
  interlocutors: User[] = [];
  private = false;
  isFriends = false;
  moment = moment;
  typingNames: any = new Set();
  pending = false;

  constructor(
    private socketService: SocketService,
    private selectChat: SelectChatService,
    private userService: UserService,
  ) { }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {

    }
  }

  startTyping() {
    this.socketService.emit('user typing', { userName: this.user.fullName, roomId: this.room._id })
    .subscribe(res => res);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  renderNames() {
    return Array.from(this.typingNames).filter(name => name !== this.user.fullName).join(', ');
  }

  ngOnChanges(changes) {

    if (changes.user) {

      this.selectChat.getChatIdEmitter()
      .subscribe(room => {
        this.room = room;
        this.messages = [];

        this.socketService.on(`message response ${room._id}`)
        .subscribe(message => {
          this.messages = this.messages.concat(message);
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

        this.interlocutors = [];
        const interlocutorsId = room.users.filter(userId => userId !== this.user._id);
        if (interlocutorsId.length === 1) {
          this.private = true;
        }

        interlocutorsId.map(id => {

          this.userService.getUserById(id)
          .subscribe(interlocutor => {
            this.interlocutors = this.interlocutors.concat(interlocutor);
            if (this.private) {
              const pending = this.user.friends.some(friendId => friendId === interlocutor._id);
              const accepted = this.interlocutors[0].friends.some(friendId => friendId === this.user._id);
              if (pending && accepted) {
                this.isFriends = true;
              } else if (pending) {
                this.pending = true;
                this.isFriends = false;
              }
            }
            if (this.isFriends) {
              this.socketService.emit('get messages', this.room._id)
              .subscribe(data => data);
            }
          });

        });
      });
      this.socketService.on(`update user ${this.user._id}`)
      .subscribe(newUser => {
        this.userService.changeUser(newUser);
      });

      this.user.friends.map(friendId => {
        this.socketService.on(`update user ${this.user._id} ${friendId}`)
        .subscribe(newFriend => {
          if (newFriend._id) {
            this.pending = false;
            this.isFriends = true;
            this.socketService.emit('get messages', this.room._id)
            .subscribe(data => data);
          }
        });
      });

    }
  }

  ngOnInit() {
    this.selectChat.getChatIdEmitter()
    .subscribe(room => {
      this.room = room;
      this.messages = [];

      this.socketService.on(`messages response ${this.room._id}`)
      .subscribe(messages => {
        this.messages = messages;
      });

      this.interlocutors = [];
      const interlocutorsId = room.users.filter(userId => userId !== this.user._id);
      if (interlocutorsId.length === 1) {
        this.private = true;
      }

      interlocutorsId.map(id => {

        this.userService.getUserById(id)
        .subscribe(interlocutor => {
          this.interlocutors = this.interlocutors.concat(interlocutor);
          if (this.private) {
            const pending = this.user.friends.some(friendId => friendId === interlocutor._id);
            const accepted = this.interlocutors[0].friends.some(friendId => friendId === this.user._id);
            if (pending && accepted) {
              this.isFriends = true;
            } else if (pending) {
              this.pending = true;
              this.isFriends = false;
            }
          }
          if (this.isFriends) {
            this.socketService.emit('get messages', this.room._id)
            .subscribe(data => data);
          }
        });

      });
    });
  }

  getImage(msg) {
    const usr = this.interlocutors.find(interlocutor => interlocutor._id === msg.sender);
    return usr && usr.picture || '';
  }

  sortMsgs(messages) {
    return messages && messages.sort((msg1, msg2) => moment(msg1.date).valueOf() - moment(msg2.date).valueOf());
  }

  acceptFriend() {
    this.socketService.emit('update user', {
      userId: this.user._id,
      friendId: this.interlocutors[0]._id,
      update: { friends: this.user.friends.concat(this.interlocutors[0]._id) }
    })
    .subscribe(data => data);

    // this.userService.updateUser(this.user._id, { friends: this.user.friends.concat(this.interlocutors[0]._id) })
    // .subscribe(status => {
    //   if (status.success) {
    //     this.isFriends = true;
    //   }
    // });
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
    .subscribe(response => {
      console.log(response);
    });
    this.message = '';
  }

}
