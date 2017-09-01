import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, User } from '../shared';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  email = 'user@gmail.com';
  password = '111111';
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  submitForm() {
    this.userService.attemptAuth({ email: this.email, password: this.password })
    .subscribe(data => this.router.navigateByUrl('/chat'));
  }

}
