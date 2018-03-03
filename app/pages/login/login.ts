import { UserService } from './../../shared/user/user.service';
import { Component } from "@angular/core";
import { User } from "../../shared/user/user";

@Component({
  selector: "LoginPage",
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css"],
  providers: [UserService]

})
export class LoginPage {
  user: User;
  isLoggingIn: boolean;
  constructor(private userService: UserService) {
    this.user = new User();
    this.user.username = "my.test.account@nativescript.org";
    this.user.password = "password";
  }
  submit() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
      );

  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
} 