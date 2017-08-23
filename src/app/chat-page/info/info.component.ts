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
  isFriend = false;

  constructor(
    private selectUser: SelectUserService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.selectUser.getUserIdEmitter().subscribe(userId => {
      if (userId) {
        this.userService.getUserById(userId)
        .subscribe(userInfo => {
          this.isFriend = false;
          this.userInfo = userInfo;
          if (this.user.friends.indexOf(userInfo._id) !== -1) {
            this.isFriend = true;
          }
        });
      }
    });
  }

  addFriend() {
    this.userService.updateUser(this.user._id, { friends: this.user.friends.concat(this.userInfo._id) })
    .subscribe(status => {
      if (status.success) {
        this.isFriend = true;
      }
    });
  }

}
