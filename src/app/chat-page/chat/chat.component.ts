import { Component, OnInit } from '@angular/core';

import { SocketService } from '../../shared';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.socketService.connect();
  }

}
