import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../shared';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  @Input() rooms: any[];
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    console.log(this.rooms);
  }

}
