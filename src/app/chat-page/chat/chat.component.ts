import { Component, OnInit, Input } from '@angular/core';

import { SocketService, User, SelectChatService, UserService, } from '../../shared';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() user: User;
  message: string;
  room: any;
  interlocutors: User[] = [];

  constructor(
    private socketService: SocketService,
    private selectChat: SelectChatService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.selectChat.getChatIdEmitter()
    .subscribe(room => {
      this.room = room;
      const interlocutorsId = room.users.filter(userId => userId !== this.user._id);
      interlocutorsId.map(id => {
        this.userService.getUserById(id)
        .subscribe(interlocutor => {
          this.interlocutors = this.interlocutors.concat(interlocutor);
        });
      });
    });

    this.socketService.connect();
  }

}
