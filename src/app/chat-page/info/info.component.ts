import { Component, OnInit, Input, HostListener, ViewChild } from '@angular/core';
import * as moment from 'moment';

import { SelectUserService, User, UserService, SocketService, SelectChatService, } from 'app/shared';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @ViewChild('popup') popup: any;
  @Input() user: User;
  userInfo: User;
  moment = moment;
  isFriend = false;
  chat: any;
  showPopup = false;
  @HostListener('document:click', ['$event.target'])
  docClicked(target): void {
    if (!this.popup) {
      return;
    }
    if (!this.popup.nativeElement.contains(target) && this.showPopup) {
      this.triggerPopup();
    }
  }

  constructor(
    private selectUser: SelectUserService,
    private userService: UserService,
    private socketService: SocketService,
    private selectChatService: SelectChatService,
  ) { }

  ngOnInit() {
    this.selectUser.getUserIdEmitter().subscribe(user => {
      if (!user) {
        return;
      }
      this.isFriend = false;
      this.userInfo = user;
      this.socketService.on(`update user ${this.userInfo._id} ${this.user._id}`)
      .subscribe(userInfo => {
        this.isFriend = false;
        this.userInfo = userInfo;
        if (this.user.friends.indexOf(user._id) !== -1) {
          this.isFriend = true;
        }
      });
      this.socketService.on(`update user ${this.userInfo._id}`)
      .subscribe(userInfo => {
        this.isFriend = false;
        this.userInfo = userInfo;
        if (this.user.friends.indexOf(user._id) !== -1) {
          this.isFriend = true;
        }
      });
      if (this.user.friends.indexOf(user._id) !== -1) {
        this.isFriend = true;
      }
    });
    this.selectChatService.getChatIdEmitter().subscribe(chat => {
      this.chat = chat;
    });
  }

  triggerPopup() {
    this.showPopup = !this.showPopup;
  }

  logout() {
    this.socketService.disconnect();
    this.userService.purgeAuth();
  }

  addFriend() {
    this.socketService.emit('get or create room', [this.user._id, this.userInfo._id])
    .subscribe(room => room);
    this.socketService.emit('update user', {
      userId: this.user._id,
      friendId: this.userInfo._id,
      update: { friends: this.user.friends.filter(friendId => friendId !== this.userInfo._id ).concat(this.userInfo._id) },
    })
    .subscribe(data => data);
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
    this.isFriend = false;
  }

}
