import { Component, OnInit, Input } from '@angular/core';

import { SocketService, User, SelectChatService } from '../../shared';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() user: User;
  message: string;

  constructor(
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.socketService.connect();
  }

}
