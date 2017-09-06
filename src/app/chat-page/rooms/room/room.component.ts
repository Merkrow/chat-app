import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

import { User, SelectChatService, SelectUserService, RoomService, UserService, SocketService, } from '../../../shared';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  @Input() room: any;
  @Input() user: User;
  @Input() onlineUsers: string[];
  @Output() removeRoom = new EventEmitter<string>();
  interlocutors: User[] = [];
  active = false;
  title = '';
  picture = '';
  lastMessage: any = {};
  lastMessageTime: any;
  unreadLength = 0;

  constructor(
    private selectChat: SelectChatService,
    private selectUser: SelectUserService,
    private roomService: RoomService,
    private userService: UserService,
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.selectChat.getChatIdEmitter().subscribe(room => {
      if (room === null) {
        return;
      }
      this.active = room._id === this.room._id;
      if (this.active) {
        this.socketService.emit('read messages', { roomId: this.room._id, userId: this.user._id })
        .subscribe(data => data);
        this.unreadLength = 0;
      }
    });
    this.room.users
      .filter(userId => userId !== this.user._id)
      .map(userId => {
        this.userService.getUserById(userId).subscribe(user => {
          this.interlocutors = this.interlocutors.concat(user);
          this.title = this.room.title || user.fullName;
          this.picture = this.room.picture || user.picture;
        });
      });
    this.socketService.emit('get last message', this.room._id)
    .subscribe(data => {
      return data;
    });
    this.socketService.emit('get unread', { roomId: this.room._id, userId: this.user._id })
    .subscribe(data => data);

    this.socketService.on(`unread messages ${this.room._id}`).subscribe(unreadLength => {
      this.unreadLength = unreadLength;
    });

    this.socketService.on(`last message ${this.room._id} new`).subscribe(message => {
      if (!this.active) {
        this.unreadLength += 1;
      }
      this.lastMessage = message;
    });

    this.socketService.on(`last message ${this.room._id}`).subscribe(message => {
      this.lastMessage = message;
      this.setTime();
      window.setInterval(this.setTime.bind(this), 5000);
    });
  }

  setTime() {
    if (!this.lastMessage) {
      return;
    }
    const msgMs = moment(this.lastMessage.date).valueOf();
    const ms = moment().valueOf();
    this.lastMessageTime = ms - msgMs >= 3600000 ? null : moment(ms - msgMs).format('mm');
  }

  deleteChat(room) {
    this.roomService.deleteRoom(room._id)
    .subscribe(status => {
      if (status.success) {
        this.removeRoom.emit(room._id);
      }
    });
  }

  setChat() {
    if (this.active) {
      return;
    }
    const userId = this.room.users.filter(friendId => friendId !== this.user._id)[0];
    const user = this.interlocutors.filter(interlocutor => interlocutor._id === userId)[0];
    this.selectUser.emitUserIdChangeEvent(user);
    this.selectChat.emitChatIdChangeEvent(this.room);
  }


}
