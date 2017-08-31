import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, User, SocketService } from '../shared';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  isAuthenticated = false;
  user: User;
  popup = false;
  chosenUser: string;
  showFriends = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(isAuth => {
        this.isAuthenticated = isAuth;
        if (!isAuth) {
          this.router.navigateByUrl('/login');
        }
    });
    this.userService.currentUser.subscribe(user => {
      if (!this.user && user._id || this.user && this.user._id !== user._id) {
        this.socketService.connect(user._id);
        this.socketService.emit('online users', { friends: user.friends, id: user._id })
        .subscribe(online => online);
      }
      this.user = user;
    });
  }

  toggleShowFriends(status: boolean) {
    this.showFriends = status;
  }

  triggerPopup($event: boolean) {
    this.popup = $event;
  }

}
