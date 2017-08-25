import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserService, User, RoomService } from '../../shared';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  @Input() rooms: any[];
  @Input() user: User;
  filterValue: string;

  constructor(
    private userService: UserService,
    private roomService: RoomService,
  ) { }

  ngOnInit() {
    this.roomService.getNewRoom().subscribe(room => {
      if (!this.rooms.some(prev => prev._id === room._id)) {
        this.rooms = this.rooms.concat(room);
      }
    });
  }

  filterFunc(rooms) {

  }

  removeRoom(id) {
    this.rooms = this.rooms.filter(room => room._id !== id);
  }

}
