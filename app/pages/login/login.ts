import { Page } from 'tns-core-modules/ui/page';
import { UserService } from './../../shared/user/user.service';
import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/user/user";
import { Route, Router } from '@angular/router';

@Component({
  selector: "LoginPage",
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css"],
  providers: [UserService]

})
export class LoginPage implements OnInit {

  user: User;
  isLoggingIn: boolean;
  isLoading: boolean;

  constructor(private userService: UserService, private router: Router, private page: Page) {
    this.user = new User();
    this.user.username = "hieu";
    this.user.password = "1234";



  }
  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }
  login() {
    this.isLoading = true;
    this.userService.login(this.user)
      .subscribe(
        () => {
          this.router.navigate(["/list"]);
          this.isLoading = false;

        },
        () => { this.isLoading = false }

      );

  }
  register() {
    this.userService.register(this.user).subscribe(() => {
      this.router.navigate(["/list"])
      this.isLoading = false;

    }, () => { this.isLoading = false }
    )
  }

} 