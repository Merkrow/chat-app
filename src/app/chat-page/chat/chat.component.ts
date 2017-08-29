import { Component, OnInit, AfterViewChecked, Input, ViewChild, ElementRef, } from '@angular/core';
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
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('chat') private myScrollContainer: ElementRef;
  @Input() user: User;
  messages: any[];
  message = '';
  room: any;
  interlocutors: User[] = [];
  private = false;
  isFriends = true;
  moment = moment;
  typingNames: any = new Set();
  debounce = debounce;

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

  ngOnInit() {
    this.socketService.connect(this.user._id);
    this.selectChat.getChatIdEmitter()
    .subscribe(room => {
      this.room = room;
      if (this.isFriends) {
        this.socketService.emit('get messages', room._id)
        .subscribe(data => data);
      }

      this.socketService.on(`message response ${room._id}`)
      .subscribe(message => {
        this.messages = this.messages.concat(message);
        this.socketService.emit('get last message', room._id)
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
            this.isFriends = this.user.friends.some(friendId => friendId === interlocutor._id);
          } else {
            this.isFriends = false;
          }
        });
      });
    });


    this.socketService.on('messages response')
    .subscribe(messages => {
      this.messages = messages;
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
    this.userService.updateUser(this.user._id, { friends: this.user.friends.concat(this.interlocutors[0]._id) })
    .subscribe(status => {
      if (status.success) {
        this.isFriends = true;
      }
    });
  }

  sendMessage() {
    if (!this.message.length) {
      return;
    }
    this.socketService.emit('chat message', {
      userId: this.user._id,
      date: moment().format(),
      chatId: this.room._id,
      text: this.message
    })
    .subscribe(response => {
      console.log(response);
    });
    this.message = '';
  }

}
