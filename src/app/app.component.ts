import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  socket;

  ngOnInit() {
    this.socket = io('http://localhost:3000');
    this.socket.emit('chat message', 'aaa');
  }
}
