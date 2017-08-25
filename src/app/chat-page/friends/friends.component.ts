import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

import { RoomService, User, SelectChatService } from '../../shared';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  @Input() user: User;
  @Input() friends: User[];
  @Output() toggleShowFriends = new EventEmitter<boolean>();

  constructor(
    private roomService: RoomService,
    private selectChatService: SelectChatService,
  ) { }

  ngOnInit() {

  }

  navigateToRoom(friend: User) {
    this.roomService.getOrCreateRoom([this.user._id, friend._id])
    .subscribe(room => {
      this.toggleShowFriends.emit(false);
      this.selectChatService.emitChatIdChangeEvent(room._id);
    });
  }

}
