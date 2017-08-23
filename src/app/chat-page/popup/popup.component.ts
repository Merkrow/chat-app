import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { UserService, User, RoomService } from '../../shared';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() user: User;
  @Output() triggerPopup = new EventEmitter<boolean>();
  users: User[];
  opened = false;
  constructor(
    private userService: UserService,
    private _eref: ElementRef,
    private roomService: RoomService,
  ) { }

  @HostListener('document:click', ['$event.target'])
  docClicked(target): void {
    if (!this._eref.nativeElement.contains(event.target) && this.opened) {
      this.triggerPopup.emit(false);
    }
    this.opened = true;
  }

  ngOnInit() {
  }

  addFriend(user: User) {
    this.roomService.postRoom({ users: [{
        userId: this.user._id,
        fullName: this.user.firstName + ' ' + this.user.lastName,
      },
      {
        userId: user._id,
        fullname: user.firstName + ' ' + user.lastName,
      }]
    }).subscribe(room => {
      console.log(room);
    });
    this.userService.updateUser(this.user._id, { friends: this.user.friends.concat(user._id) })
    .subscribe(status => status);
  }

  search($event) {
    let username = '';
    if ($event.srcElement.value) {
      username = $event.srcElement.value;
      this.userService.searchUsers(username)
      .subscribe((users) => {
        this.users = users.filter(user => this.user.friends.indexOf(user._id) === -1);
      });
    } else {
      this.userService.getUsers()
      .subscribe((users) => {
        this.users = users.filter(user => this.user.friends.indexOf(user._id) === -1);
      });
    }
  }

}
