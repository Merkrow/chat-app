import { Component, OnInit } from '@angular/core';
import { RoomService, UserService, User } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {
  isAuthenticated = false;
  user: User;
  rooms: any;
  popup = false;
  constructor(
    private userService: UserService,
    private roomService: RoomService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(isAuth => {
        this.isAuthenticated = isAuth;
        if (!isAuth) {
          this.router.navigateByUrl('/login');
        }
    });
    this.userService.currentUser.subscribe(user => {
      this.user = user;
      if (user._id) {
        this.roomService.getUserRooms(user._id)
        .subscribe(rooms => {
          this.rooms = rooms;
        });
      }
    });
  }

  triggerPopup($event) {
    this.popup = $event;
  }

}
