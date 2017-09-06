import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { SelectUserService, User, UserService, SocketService, SelectChatService, } from 'app/shared';

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
  chat: any;

  constructor(
    private selectUser: SelectUserService,
    private userService: UserService,
    private socketService: SocketService,
    private selectChatService: SelectChatService,
  ) { }

  ngOnInit() {
    this.selectUser.getUserIdEmitter().subscribe(user => {
      this.isFriend = false;
      this.userInfo = user;
      if (this.user.friends.indexOf(user._id) !== -1) {
        this.isFriend = true;
      }
    });
    this.selectChatService.getChatIdEmitter().subscribe(chat => {
      this.chat = chat;
    });
  }

  logout() {
    this.socketService.disconnect();
    this.userService.purgeAuth();
  }

  addFriend() {
    console.log(this.chat);
  }

  unfriendUser() {
    this.socketService.emit(`update user`, {
      userId: this.userInfo._id,
      friendId: this.user._id,
      update: { friends: this.userInfo.friends.filter(friendId => friendId !== this.user._id )}
    }).subscribe(data => data);
    this.socketService.emit(`update user`, {
      userId: this.user._id,
      friendId: this.userInfo._id,
      update: { friends: this.user.friends.filter(friendId => friendId !== this.userInfo._id) }
    }).subscribe(data => data);
  }

}
