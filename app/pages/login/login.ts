import { Page } from 'tns-core-modules/ui/page';
import { UserService } from './../../shared/user/user.service';
import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/user/user";
import { Route, Router } from '@angular/router';
const firebase = require("nativescript-plugin-firebase");


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
    this.user.username = "hieu@gmail.com";
    this.user.password = "123456";



  }
  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
 firebase.init({
    persist: true
  }).then(
    function (instance) {
      console.dir(instance)
      console.log("firebase.init done");
      const citiesCollection = firebase.firestore.collection("heros");

const unsubscribe = citiesCollection.onSnapshot((snapshot) => {
  snapshot.forEach(city => console.dir(city.data()));
});
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);;


  }
  login() {
firebase.login(
      {
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: 'hieu@gmail.com',
          password: 'hieu1234'
        }
      })
      .then(result => console.dir(result))
      .catch(error => console.log(error));
  

  }
  register() {
    this.userService.register(this.user).subscribe(() => {
      this.router.navigate(["/list"])
      this.isLoading = false;

    }, () => { this.isLoading = false }
    )
  }

} 