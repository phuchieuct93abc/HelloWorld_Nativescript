import { Page } from 'tns-core-modules/ui/page';
import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/user/user";
import { Route, Router } from '@angular/router';
import * as firebase from "nativescript-plugin-firebase";


@Component({
  selector: "LoginPage",
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css"],

})
export class LoginPage implements OnInit {
  user: User;
  isLoading: boolean;
  constructor(private router: Router, private page: Page) {
    this.user = new User();
    this.user.username = "hieu@gmail.com";
    this.user.password = "hieu1234";



  }
  ngOnInit(): void {
    this.page.actionBarHidden = true;

  }
  login() {
    this.isLoading = true;
    firebase.login({
      type: firebase.LoginType.PASSWORD,
      passwordOptions: {
        email: this.user.username,
        password: this.user.password
      }
    })
      .then(result => {
        this.isLoading = false;

        this.router.navigateByUrl("/chat")
      })
      .catch(error => {
        this.isLoading = false;
        alert("Login failed!")
      });
  }


} 