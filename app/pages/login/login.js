"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("tns-core-modules/ui/page");
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var router_1 = require("@angular/router");
var firebase = require("nativescript-plugin-firebase");
var LoginPage = /** @class */ (function () {
    function LoginPage(router, page) {
        this.router = router;
        this.page = page;
        this.user = new user_1.User();
        this.user.username = "hieu@gmail.com";
        this.user.password = "hieu1234";
    }
    LoginPage.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: this.user.username,
                password: this.user.password
            }
        })
            .then(function (result) { return _this.router.navigateByUrl("/chat"); })
            .catch(function (error) { return alert("Login failed!"); });
    };
    LoginPage.prototype.register = function () {
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: "LoginPage",
            templateUrl: "./pages/login/login.html",
            styleUrls: ["pages/login/login-common.css"],
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFnRDtBQUNoRCxzQ0FBa0Q7QUFDbEQsK0NBQThDO0FBQzlDLDBDQUFnRDtBQUNoRCx1REFBeUQ7QUFTekQ7SUFNRSxtQkFBb0IsTUFBYyxFQUFVLElBQVU7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUlsQyxDQUFDO0lBQ0QsNEJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztJQUUvQyxDQUFDO0lBQ0QseUJBQUssR0FBTDtRQUFBLGlCQWNDO1FBWkMsUUFBUSxDQUFDLEtBQUssQ0FDWjtZQUNFLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7YUFDN0I7U0FDRixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQWxDLENBQWtDLENBQUM7YUFDbEQsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFHNUMsQ0FBQztJQUNELDRCQUFRLEdBQVI7SUFFQSxDQUFDO0lBcENVLFNBQVM7UUFOckIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FFNUMsQ0FBQzt5Q0FPNEIsZUFBTSxFQUFnQixXQUFJO09BTjNDLFNBQVMsQ0FzQ3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJMb2dpblBhZ2VcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIl0sXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5QYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdXNlcjogVXNlcjtcclxuICBpc0xvZ2dpbmdJbjogYm9vbGVhbjtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIHRoaXMudXNlci51c2VybmFtZSA9IFwiaGlldUBnbWFpbC5jb21cIjtcclxuICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiaGlldTEyMzRcIjtcclxuXHJcblxyXG5cclxuICB9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2xvZ2luXCI7XHJcblxyXG4gIH1cclxuICBsb2dpbigpIHtcclxuICBcclxuICAgIGZpcmViYXNlLmxvZ2luKFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgICAgZW1haWw6IHRoaXMudXNlci51c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL2NoYXRcIikpXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBhbGVydChcIkxvZ2luIGZhaWxlZCFcIikpO1xyXG5cclxuXHJcbiAgfVxyXG4gIHJlZ2lzdGVyKCkge1xyXG5cclxuICB9XHJcblxyXG59ICJdfQ==