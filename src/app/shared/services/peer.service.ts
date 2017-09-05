import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import Peer from 'peerjs';

@Injectable()
export class PeerService {
  private host = 'localhost';
  private port = '3000';
  private peer: any;
  private id: string;
  constructor() {
  }
  connect (id) {
    this.peer = new Peer(id, {
      host: this.host,
      port: this.port,
      path: '/peerjs',
      config: {
        id,
      }
    });

    this.peer.on('open', () => {
      this.connected();
      this.id = this.peer.id;
    });

  }

  disconnect () {
    this.peer.disconnect();
  }
  emit(chanel, message) {
    return new Observable<any>(observer => {

    });
  }
  on(event_name) {
    return new Observable<any>(observer => {

    });
  }
  private connected() {
    console.log('Peer connected');
  }
  private disconnected() {
    console.log('Disconnected');
  }
}
