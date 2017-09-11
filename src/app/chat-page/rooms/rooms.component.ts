import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { UserService, User, RoomService, SocketService, SelectChatService, SelectUserService } from 'app/shared';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, OnChanges {
  @Input() user: User;
  filterValue = '';
  rooms: any[] = [];
  onlineUsers: string[] = [];

  constructor(
    private userService: UserService,
    private roomService: RoomService,
    private socketService: SocketService,
    private selectChat: SelectChatService,
    private selectUser: SelectUserService,
  ) { }

  ngOnInit() {
    this.roomService.getNewRoom().subscribe(room => {
      if (!room) {
        return;
      }
      if (!this.rooms.some(prev => {
        return prev._id === room._id;
      })) {
        this.rooms = this.rooms.concat(room);
      }
    });
  }

  ngOnChanges(changes) {
    if (changes.user) {
      this.socketService.on(`new room ${changes.user.currentValue._id}`)
      .subscribe(room => {
        this.rooms = this.rooms.concat(room);
        this.socketService.on(`delete room ${room._id}`)
        .subscribe(roomId => {
          this.rooms = this.rooms.filter(rm => rm._id !== roomId);
          this.selectChat.emitChatIdChangeEvent(this.rooms[0]);
        });
        this.selectChat.emitChatIdChangeEvent(room);
        const friendId = room.users.filter(id => id !== changes.user.currentValue._id)[0];
        this.userService.getUserById(friendId)
        .subscribe(user => {
          this.selectUser.emitUserIdChangeEvent(user);
        });
      });
      this.socketService.on(`select room ${changes.user.currentValue._id}`)
      .subscribe(room => {
        this.selectChat.emitChatIdChangeEvent(room);
        const friendId = room.users.filter(id => id !== changes.user.currentValue._id)[0];
        this.userService.getUserById(friendId)
        .subscribe(user => {
          this.selectUser.emitUserIdChangeEvent(user);
        });
      });
      this.roomService.getUserRooms(changes.user.currentValue._id)
      .subscribe(rooms => {
        this.rooms = rooms;
        this.socketService.emit('online users', {
          friends: changes.user.currentValue.friends,
          id: `${changes.user.currentValue._id}`
        })
        .subscribe(online => online);

        this.socketService.on(`online users ${changes.user.currentValue._id}`)
        .subscribe(online => {
          this.onlineUsers = online;
        });

        this.socketService.on(`online users`)
        .subscribe(online => {
          this.onlineUsers = online;
        });

      });
      this.rooms.map(room => {
        this.socketService.on(`delete room ${room._id}`)
        .subscribe(roomId => {
          this.rooms = this.rooms.filter(rm => rm._id !== roomId);
          this.selectChat.emitChatIdChangeEvent(this.rooms[0]);
        });
      });
    }
  }

  filterFunc(rooms) {

  }

  removeRoom(id) {
    this.rooms = this.rooms.filter(room => room._id !== id);
    this.roomService.setRemovedRoom(this.rooms.find(room => room._id === id));
    this.selectChat.emitChatIdChangeEvent(null);
  }

}
