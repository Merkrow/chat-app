import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserService, User } from '../../shared';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  @Input() rooms: any[];
  @Input() user: User;
  @Output() chooseUser = new EventEmitter<string>();

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  setChat(room) {
    console.log(room);
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

}
