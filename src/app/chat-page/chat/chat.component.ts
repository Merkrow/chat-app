import { Component, OnInit, Input } from '@angular/core';

import { SocketService } from '../../shared';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() room: any;

  constructor(
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.socketService.connect();
  }

}
