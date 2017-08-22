import { EventEmitter } from '@angular/core';

export class SelectUserService {
  changeUser: EventEmitter<string> = new EventEmitter();
  constructor() {}
  emitUserIdChangeEvent(number) {
    this.changeUser.emit(number);
  }
  getUserIdEmitter() {
    return this.changeUser;
  }
}
