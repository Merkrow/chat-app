import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  image = '';
  first = '';
  last = '';
  email: string;
  password: string;
  phone = '';
  address = '';
  language = '';
  username: string;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  submit() {
    this.userService.postUser({
      picture: this.image,
      firstName: this.first,
      lastName: this.last,
      email: this.email,
      password: this.password,
      phone: this.phone,
      address: this.address,
      language: this.language,
      username: this.username,
    }).subscribe(user => {

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
}
