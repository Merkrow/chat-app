import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, SelectChatService, User } from '../shared';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  isAuthenticated = false;
  user: User;
  popup = false;
  chosenChat: string;
  chosenUser: string;
  showFriends = false;
  friends: User[] = [];

  constructor(
    private userService: UserService,
    private selectChat: SelectChatService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.selectChat.getChatIdEmitter().subscribe(id => {
      this.chosenChat = id;
    });

    this.userService.isAuthenticated.subscribe(isAuth => {
        this.isAuthenticated = isAuth;
        if (!isAuth) {
          this.router.navigateByUrl('/login');
        }
    });
    this.userService.currentUser.subscribe(user => {
      this.user = user;
      if (user._id) {
        user.friends.map(friendId => {
          this.userService.getUserById(friendId)
          .subscribe(friend => {
            this.friends.push(friend);
          });
        });
      }
    });
  }

  toggleShowFriends(status: boolean) {
    this.showFriends = status;
  }

  triggerPopup($event: boolean) {
    this.popup = $event;
  }

}
