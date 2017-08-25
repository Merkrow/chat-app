import { EventEmitter } from '@angular/core';
import { User } from '../models';

export class SelectUserService {
  changeUser: EventEmitter<User> = new EventEmitter();
  constructor() {}
  emitUserIdChangeEvent(user: User) {
    this.changeUser.emit(user);
  }
  getUserIdEmitter() {
    return this.changeUser;
  }
}
