import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
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
    private jwtService: JwtService,
  ) {}

  populate() {
    const token = this.jwtService.getToken();
    if (token) {
      this.apiService.getWithToken(`${userUrl}/jwt_login`, token)
      .subscribe(
        user => {
          this.setAuth(user, token);
        },
        err => this.purgeAuth(),
      );
    } else {
      this.purgeAuth();
    }
  }

  searchUsers(username: string) {
    return this.apiService.get(`${userUrl}/search/${username}`);
  }

  setAuth(user: User, token) {
    this.jwtService.saveToken(token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  getUserById(Id): Observable<User> {
    return this.apiService.get(`${userUrl}/userId/${Id}`);
  }

  purgeAuth() {
    this.jwtService.destroyToken();
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
        this.setAuth(data.user, data.token);
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

  postUser(user): Observable<any> {
    return this.apiService.post(`${userUrl}/register`, user);
  }

}
