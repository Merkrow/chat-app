import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';


@Injectable()
export class RoomService {
  constructor(
    private http: Http,
    private apiService: ApiService,
  ) {}

  getUserRooms(id): Observable<any> {
    return this.apiService.get(`/rooms/user/${id}`);
  }

  postRoom(params): Observable<any> {
    return this.apiService.post('/rooms', params);
  }

  updateRoom(id): Observable<any> {
    return this.apiService.put(`/rooms/${id}`);
  }

  deleteRoom(id): Observable<any> {
    return this.apiService.delete(`/rooms/${id}`);
  }

  getOrCreateRoom(users): Observable<any> {
    return this.apiService.post('/rooms/search', { users });
  }

}
