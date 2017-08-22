import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User, SelectChatService, SelectUserService } from '../../../shared';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  @Input() room: any;
  @Input() user: User;
  active = false;

  constructor(
    private selectChat: SelectChatService,
    private selectUser: SelectUserService,
  ) { }

  ngOnInit() {
    this.selectChat.getChatIdEmitter().subscribe(id => {
      this.active = id === this.room._id;
    });
  }
  setChatTitle(room) {
    let name;
    if (room.title) {
      name = room.title;
    } else {
      name = room.users.filter(sm => sm.userId !== this.user._id)[0].fullName;
    }
    return name;
  }

  setChat() {
    const userId = this.room.users.filter(sm => sm.userId !== this.user._id)[0].userId;
    this.selectUser.emitUserIdChangeEvent(userId);
    this.selectChat.emitChatIdChangeEvent(this.room._id);
  }


}
