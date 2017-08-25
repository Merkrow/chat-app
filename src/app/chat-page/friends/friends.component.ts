import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

import { RoomService, User, SelectChatService, SelectUserService } from '../../shared';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  @Input() user: User;
  @Input() friends: User[];
  @Output() toggleShowFriends = new EventEmitter<boolean>();
  filterValue = '';

  constructor(
    private roomService: RoomService,
    private selectChatService: SelectChatService,
    private selectUser: SelectUserService,
  ) { }

  ngOnInit() {
  }

  filterFunc(arr) {
    return arr.filter(item => item.fullName.toLowerCase().indexOf(this.filterValue.toLowerCase()) !== -1);
  }

  navigateToRoom(friend: User) {
    this.roomService.getOrCreateRoom([this.user._id, friend._id])
    .subscribe(room => {
      this.toggleShowFriends.emit(false);
      this.selectChatService.emitChatIdChangeEvent(room._id);
      this.selectUser.emitUserIdChangeEvent(friend);
    });
  }

}
