import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { UserService, User, } from '../../shared';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() user: any;
  @Output() triggerPopup = new EventEmitter<boolean>();
  users: User[];
  opened = false;
  constructor(
    private userService: UserService,
    private _eref: ElementRef,
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

  search($event) {
    let username = '';
    if ($event.srcElement.value) {
      username = $event.srcElement.value;
      this.userService.searchUsers(username)
      .subscribe((users) => {
        this.users = users;
      });
    } else {
      this.userService.getUsers()
      .subscribe((users) => {
        this.users = users;
      });
    }
  }

}
