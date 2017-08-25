import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User, SelectChatService, SelectUserService, RoomService, UserService } from '../../../shared';

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

  constructor(
    private selectChat: SelectChatService,
    private selectUser: SelectUserService,
    private roomService: RoomService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.selectChat.getChatIdEmitter().subscribe(id => {
      this.active = id === this.room._id;
    });
    this.room.users
      .filter(userId => userId !== this.user._id)
      .map(userId => {
        this.userService.getUserById(userId).subscribe(user => {
          this.interlocutors = this.interlocutors.concat(user);
          if (this.room.title) {
            this.title = this.room.title;
          } else {
            this.title = user.fullName;
          }
        });
      });
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
    this.selectUser.emitUserIdChangeEvent(userId);
    this.selectChat.emitChatIdChangeEvent(this.room._id);
  }


}
