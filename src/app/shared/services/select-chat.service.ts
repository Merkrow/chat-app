import { EventEmitter } from '@angular/core';

export class SelectChatService {
  changeChat: EventEmitter<string> = new EventEmitter();
  constructor() {}
  emitChatIdChangeEvent(number) {
    this.changeChat.emit(number);
  }
  getChatIdEmitter() {
    return this.changeChat;
  }
}
