import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';


@Injectable()
export class RoomService {
  newRoom = new ReplaySubject<any>();
  removedRoom = new ReplaySubject<any>();
  constructor(
    private http: Http,
    private apiService: ApiService,
  ) {}

  getUserRooms(id): Observable<any> {
    return this.apiService.get(`/rooms/user/${id}`);
  }

  postRoom(params): Observable<any> {
    return this.apiService.post('/rooms', params)
    .map(room => {
      this.setNewRoom(room);
      return room;
    });
  }

  updateRoom(id): Observable<any> {
    return this.apiService.put(`/rooms/${id}`);
  }

  deleteRoom(id): Observable<any> {
    return this.apiService.delete(`/rooms/${id}`)
    .map(room => {
      this.setRemovedRoom(room);
      return room;
    });
  }

  getOrCreateRoom(users): Observable<any> {
    return this.apiService.post('/rooms/search', { users })
    .map(room => {
      this.setNewRoom(room);
      return room;
    });
  }

  setRemovedRoom(room: any) {
    this.removedRoom.next(room);
  }

  getRemovedRoom() {
    return this.removedRoom;
  }

  setNewRoom(room: any) {
    this.newRoom.next(room);
  }

  getNewRoom() {
    return this.newRoom;
  }

}
