import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { User } from '../models';

const userUrl = '/users';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private http: Http,
  ) {}

  // populate() {
  //   const credentials = this.storage.getCredentials();
  //   if (credentials) {
  //     this.apiService.post(`${userUrl}/login`, credentials)
  //     .subscribe(
  //      data => {
  //        this.setAuth(data);
  //      },
  //      err => this.purgeAuth()
  //     );
  //    } else {
  //      this.purgeAuth();
  //    }
  // }

  setAuth(user: User) {
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  getUserById(Id): Observable<User> {
    return this.apiService.get(`${userUrl}/${Id}`);
  }

  purgeAuth() {
    this.currentUserSubject.next(new User());
    this.isAuthenticatedSubject.next(false);
  }

  getUsers(): Observable<User[]> {
    return this.apiService.get(userUrl);
  }

  attemptAuth(credentials): Observable<any> {
    return this.apiService.post(`${userUrl}/auth`, credentials)
    .map(data => {
      if (data.success) {
        this.setAuth(data.user);
        return data;
      }
      return false;
    });
  }

  deleteUser(id): Observable<any> {
    return this.apiService.delete(`${userUrl}/${id}`);
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  updateUser(user: User): Observable<User> {
    return this.apiService.put(userUrl, user);
  }

  postUser(user): Observable<User> {
    return this.apiService.post(`${userUrl}/register`, user);
  }

}
