import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { SelectUserService, User, UserService, SocketService, } from '../../shared';

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
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.selectUser.getUserIdEmitter().subscribe(user => {
      this.isFriend = false;
      this.userInfo = user;
      if (this.user.friends.indexOf(user._id) !== -1) {
        this.isFriend = true;
      }
    });
  }

  unfriendUser() {
    this.socketService.emit(`update user`, {
      userId: this.user._id,
      friendId: this.userInfo._id,
      update: { friends: this.user.friends.filter(friendId => friendId !== this.userInfo._id) }
    }).subscribe(data => data);

    // this.userService.updateUser(this.user._id, { friends: this.user.friends.filter(friendId => friendId !== this.userInfo._id) })
    // .subscribe(status => {
    //   if (status.success) {
    //     this.isFriend = false;
    //   }
    // });
  }

}
