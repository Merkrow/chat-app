import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { SelectUserService, User, UserService, } from '../../shared';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() user: User;
  userInfo: User;
  moment = moment;

  constructor(
    private selectUser: SelectUserService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.selectUser.getUserIdEmitter().subscribe(userId => {
      if (userId) {
        this.userService.getUserById(userId)
        .subscribe(userInfo => {
          this.userInfo = userInfo;
        });
      }
    });
  }

}
