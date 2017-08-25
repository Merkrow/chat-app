import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class SelectChatService {
  changeChat = new BehaviorSubject<string>('');
  constructor() {}
  emitChatIdChangeEvent(id: string) {
    this.changeChat.next(id);
  }
  getChatIdEmitter() {
    return this.changeChat;
  }
}
