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

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

}
