import { ReplaySubject } from 'rxjs/ReplaySubject';

export class SelectChatService {
  changeChat = new ReplaySubject<any>();
  constructor() {}
  emitChatIdChangeEvent(room: any) {
    this.changeChat.next(room);
  }
  getChatIdEmitter() {
    return this.changeChat;
  }
}
