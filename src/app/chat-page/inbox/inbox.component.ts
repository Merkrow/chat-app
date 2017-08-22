import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

export class InboxComponent implements OnInit {
  @Output() triggerPopup = new EventEmitter<boolean>();
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
