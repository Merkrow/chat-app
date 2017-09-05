import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';
import P2P from 'socket.io-p2p';


@Injectable()
export class SocketService {
  private host = 'http://localhost:8080';
  private socket: any;
  private p2p: any;
  constructor() {
  }
  connect (id) {
    this.socket = io(this.host, { query: `id=${id}` });
    this.p2p = new P2P(this.socket);
    this.socket.on('connect', () => this.connected());
    this.socket.on('disconnect', () => this.disconnected());
    this.socket.on('error', (error: string) => {
        console.log(`ERROR: '${error}' (${this.host})`);
    });
    this.socket.connect();
  }
  disconnect () {
    this.socket.disconnect();
  }
  emit(chanel, message) {
    return new Observable<any>(observer => {
      this.socket.emit(chanel, message, function (data) {
        if (data.success) {
          observer.next(data.msg);
        } else {
          observer.error(data.msg);
        }
        observer.complete();
      });
    });
  }
  on(event_name) {
    return new Observable<any>(observer => {
      this.socket.off(event_name);
      this.socket.on(event_name, (data) => {
        observer.next(data);
      });
    });
  }
  private connected() {
    console.log('Connected');
  }
  private disconnected() {
    console.log('Disconnected');
  }
}
