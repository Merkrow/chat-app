import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

import { RoomService, User, SelectChatService, SelectUserService, SocketService, UserService } from 'app/shared';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  @Input() user: User;
  @Output() toggleShowFriends = new EventEmitter<boolean>();
  filterValue = '';
  onlineUsers: any = [];
  friends: User[] = [];

  constructor(
    private roomService: RoomService,
    private selectChatService: SelectChatService,
    private selectUser: SelectUserService,
    private socketService: SocketService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.user.friends.map(friendId => {
      this.userService.getUserById(friendId)
      .subscribe(friend => {
        this.friends.push(friend);
      });
    });
    this.socketService.emit('online users', { friends: this.user.friends, id: this.user._id })
    .subscribe(online => online);
    this.socketService.on(`online users ${this.user._id}`)
    .subscribe(online => {
      this.onlineUsers = online;
    });
    this.socketService.on(`online users`)
    .subscribe(online => {
      this.onlineUsers = online;
    });
  }

  filterFunc(arr) {
    return arr.filter(item => item.fullName.toLowerCase().indexOf(this.filterValue.toLowerCase()) !== -1);
  }

  navigateToRoom(friend: User) {
    this.toggleShowFriends.emit(false);
    this.socketService.emit('get or create room', [this.user._id, friend._id]).subscribe(data => data);
  }

}
