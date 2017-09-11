import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

export class InboxComponent implements OnInit {
  @Output() triggerPopup = new EventEmitter<boolean>();
  @Output() toggleShowFriends = new EventEmitter<boolean>();
  @Input() showFriends: boolean;
  @Input() isPopup: boolean;
  popup = false;
  constructor(
  ) { }

  showPopup(show: boolean) {
    this.triggerPopup.emit(show);
    this.popup = show;
  }

  ngOnInit() {

  }

}
