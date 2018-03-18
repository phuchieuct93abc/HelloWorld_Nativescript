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
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: this.user.username,
                password: this.user.password
            }
        })
            .then(function (result) {
            _this.isLoading = false;
            _this.router.navigateByUrl("/chat");
        })
            .catch(function (error) {
            _this.isLoading = false;
            alert("Login failed!");
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFnRDtBQUNoRCxzQ0FBa0Q7QUFDbEQsK0NBQThDO0FBQzlDLDBDQUFnRDtBQUNoRCx1REFBeUQ7QUFTekQ7SUFHRSxtQkFBb0IsTUFBYyxFQUFVLElBQVU7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUlsQyxDQUFDO0lBQ0QsNEJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUVuQyxDQUFDO0lBQ0QseUJBQUssR0FBTDtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtnQkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTthQUM3QjtTQUNGLENBQUM7YUFDQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFFdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNWLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqQ1UsU0FBUztRQU5yQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUU1QyxDQUFDO3lDQUk0QixlQUFNLEVBQWdCLFdBQUk7T0FIM0MsU0FBUyxDQW9DckI7SUFBRCxnQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIkxvZ2luUGFnZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiXSxcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHVzZXI6IFVzZXI7XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIHRoaXMudXNlci51c2VybmFtZSA9IFwiaGlldUBnbWFpbC5jb21cIjtcclxuICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiaGlldTEyMzRcIjtcclxuXHJcblxyXG5cclxuICB9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHJcbiAgfVxyXG4gIGxvZ2luKCkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXHJcbiAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgIGVtYWlsOiB0aGlzLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvY2hhdFwiKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgYWxlcnQoXCJMb2dpbiBmYWlsZWQhXCIpXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG59ICJdfQ==