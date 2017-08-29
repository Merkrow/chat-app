import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserService, User, RoomService, SocketService } from '../../shared';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  @Input() user: User;
  filterValue: string;
  rooms: any[] = [];
  onlineUsers: string[] = [];

  constructor(
    private userService: UserService,
    private roomService: RoomService,
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.roomService.getUserRooms(this.user._id)
    .subscribe(rooms => {
      this.rooms = rooms;
      this.socketService.emit('online users', {
        friends: this.user.friends,
        id: `${this.user._id}`
      })
      .subscribe(online => online);
      this.socketService.on(`online users ${this.user._id}`)
      .subscribe(online => {
        this.onlineUsers = online;
      });
      this.socketService.on(`online users`)
      .subscribe(online => {
        this.onlineUsers = online;
      });
    });
    this.roomService.getNewRoom().subscribe(room => {
      if (!this.rooms.some(prev => {
        return prev._id === room._id;
      })) {
        this.rooms = this.rooms.concat(room);
      }
    });
    this.roomService.getRemovedRoom().subscribe(room => {
      if (this.rooms.length && room) {
        this.rooms = this.rooms.filter(prev => prev._id !== room._id);
      }
    });
  }

  filterFunc(rooms) {

  }

  removeRoom(id) {
    this.rooms = this.rooms.filter(room => room._id !== id);
    this.roomService.setRemovedRoom(this.rooms.find(room => room._id === id));
  }

}
