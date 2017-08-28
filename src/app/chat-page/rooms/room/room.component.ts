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
  @Output() removeRoom = new EventEmitter<string>();
  interlocutors: User[] = [];
  active = false;
  title = '';
  picture = '';
  lastMessage: any = {};
  lastMessageTime: string;

  constructor(
    private selectChat: SelectChatService,
    private selectUser: SelectUserService,
    private roomService: RoomService,
    private userService: UserService,
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.selectChat.getChatIdEmitter().subscribe(room => {
      this.active = room._id === this.room._id;
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
      .subscribe(data => data);
      this.socketService.on(`last message ${this.room._id}`).subscribe(message => {
        this.lastMessage = message;
        this.setTime();
        window.setInterval(this.setTime.bind(this), 5000);
      });
  }

  setTime() {
    const msgMs = moment(this.lastMessage.date).valueOf();
    const ms = moment().valueOf();
    this.lastMessageTime = moment(ms - msgMs).format('mm');
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
    const userId = this.room.users.filter(friendId => friendId !== this.user._id)[0];
    const user = this.interlocutors.filter(interlocutor => interlocutor._id === userId)[0];
    this.selectUser.emitUserIdChangeEvent(user);
    this.selectChat.emitChatIdChangeEvent(this.room);
  }


}
