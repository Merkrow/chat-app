import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { UserService, User, RoomService, SocketService } from 'app/shared';

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
    private socketService: SocketService,
  ) { }

  @HostListener('document:click', ['$event.target'])
  docClicked(target): void {
    if (!this._eref.nativeElement.contains(target) && this.opened) {
      this.triggerPopup.emit(false);
    }
    this.opened = true;
  }

  ngOnInit() {
  }

  addFriend(user: User) {
    this.socketService.emit('get or create room', [this.user._id, user._id])
    .subscribe(room => room);
    this.socketService.emit('update user', {
      userId: this.user._id,
      friendId: user._id,
      update: { friends: this.user.friends.filter(friendId => friendId !== user._id ).concat(user._id) },
    })
    .subscribe(data => data);
    this.triggerPopup.emit(false);
  }

  search($event) {
    let username = '';
    if ($event.target.value) {
      username = $event.target.value;
      this.userService.searchUsers(username)
      .subscribe((users) => {
        this.users = users.filter(user => this.user.friends.indexOf(user._id) === -1 && this.user._id !== user._id);
      });
    } else {
      this.users = [];
    }
  }

}
