import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User, SelectChatService, SelectUserService, RoomService } from '../../../shared';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  @Input() room: any;
  @Input() user: User;
  @Output() removeRoom = new EventEmitter<string>();
  active = false;
  title = '';

  constructor(
    private selectChat: SelectChatService,
    private selectUser: SelectUserService,
    private roomService: RoomService,
  ) { }

  ngOnInit() {
    this.selectChat.getChatIdEmitter().subscribe(id => {
      this.active = id === this.room._id;
    });

    if (this.room.title) {
      this.title = this.room.title;
    } else {
      this.title = this.room.users.filter(sm => sm.userId !== this.user._id)[0].fullName;
    }
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
    const userId = this.room.users.filter(sm => sm.userId !== this.user._id)[0].userId;
    this.selectUser.emitUserIdChangeEvent(userId);
    this.selectChat.emitChatIdChangeEvent(this.room._id);
  }


}
