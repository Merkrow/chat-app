import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { SocketService, User, SelectChatService, UserService, } from '../../shared';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() user: User;
  messages: any[];
  message: string;
  room: any;
  interlocutors: User[] = [];
  private = false;
  isFriends = true;

  constructor(
    private socketService: SocketService,
    private selectChat: SelectChatService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.selectChat.getChatIdEmitter()
    .subscribe(room => {
      this.room = room;
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

    this.socketService.connect();
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
    this.socketService.emit('chat message', { userId: this.user._id, date: moment(), chatId: this.room._id, text: this.message })
    .subscribe(response => {
      console.log(response);
    });
  }

}
