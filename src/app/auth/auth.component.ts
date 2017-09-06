import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { UserService, User } from '../shared';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  image = '';
  register = false;
  birthday = moment().format('DD-MM-YYYY');
  authForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.authForm = this.fb.group({
      'email': ['roger.federer@dataart.com', Validators.required],
      'password': ['111111', Validators.required],
      'first': [''],
      'last': [''],
      'phone': [''],
      'gender': [''],
      'username': ['', Validators.required],
      'address': [''],
      'language': [''],
    });
  }

  ngOnInit() {
  }

  changeToReg() {
    this.register = true;
  }

  changeToLogin() {
    this.register = false;
  }

  submit() {
    const creds = this.authForm.value;
    this.userService.postUser(Object.assign(creds, {
      picture: this.image,
      birthday: this.birthday,
    })).subscribe(res => {
      if (res.success) {
        this.userService.attemptAuth(creds)
        .subscribe(data => this.router.navigateByUrl('/chat'));
      }
    });
  }

  changeImage($event) {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
    };
    myReader.readAsDataURL(file);
  }

  submitForm() {
    const creds = this.authForm.value;
    this.userService.attemptAuth(creds)
    .subscribe(data => this.router.navigateByUrl('/chat'));
  }

}
