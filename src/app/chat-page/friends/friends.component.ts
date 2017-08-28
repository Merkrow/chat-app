import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

import { RoomService, User, SelectChatService, SelectUserService, SocketService } from '../../shared';

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
  onlineUsers: any;

  constructor(
    private roomService: RoomService,
    private selectChatService: SelectChatService,
    private selectUser: SelectUserService,
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.socketService.emit('online users', this.user.friends)
    .subscribe(online => online);
    this.socketService.on('online users')
    .subscribe(online => {
      this.onlineUsers = online;
    });
  }

  filterFunc(arr) {
    return arr.filter(item => item.fullName.toLowerCase().indexOf(this.filterValue.toLowerCase()) !== -1);
  }

  navigateToRoom(friend: User) {
    this.roomService.getOrCreateRoom([this.user._id, friend._id])
    .subscribe(room => {
      this.toggleShowFriends.emit(false);
      this.selectChatService.emitChatIdChangeEvent(room);
      this.selectUser.emitUserIdChangeEvent(friend);
    });
  }

}
