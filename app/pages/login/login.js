"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("tns-core-modules/ui/page");
var user_service_1 = require("./../../shared/user/user.service");
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var router_1 = require("@angular/router");
var LoginPage = /** @class */ (function () {
    function LoginPage(userService, router, page) {
        this.userService = userService;
        this.router = router;
        this.page = page;
        this.user = new user_1.User();
        this.user.username = "hieu";
        this.user.password = "1234";
    }
    LoginPage.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () {
            _this.router.navigate(["/list"]);
        }, function () { return alert("Unfortunately we were unable to login"); });
    };
    LoginPage.prototype.register = function () {
        var _this = this;
        this.userService.register(this.user).subscribe(function () {
            _this.router.navigate(["/list"]);
        }, function () { return alert("Unfortunately we were unable to register"); });
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: "LoginPage",
            templateUrl: "./pages/login/login.html",
            styleUrls: ["pages/login/login-common.css"],
            providers: [user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, page_1.Page])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFnRDtBQUNoRCxpRUFBK0Q7QUFDL0Qsc0NBQWtEO0FBQ2xELCtDQUE4QztBQUM5QywwQ0FBZ0Q7QUFTaEQ7SUFLRSxtQkFBb0IsV0FBd0IsRUFBVSxNQUFjLEVBQVUsSUFBVTtRQUFwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3RGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBSTlCLENBQUM7SUFDRCw0QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO0lBQy9DLENBQUM7SUFDRCx5QkFBSyxHQUFMO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzlCLFNBQVMsQ0FDUjtZQUNFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUNqQyxDQUFDLEVBQ0QsY0FBTSxPQUFBLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxFQUE5QyxDQUE4QyxDQUNyRCxDQUFDO0lBRU4sQ0FBQztJQUNELDRCQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDN0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBRWpDLENBQUMsRUFBRSxjQUFNLE9BQUEsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLEVBQWpELENBQWlELENBQUMsQ0FBQTtJQUM3RCxDQUFDO0lBaENVLFNBQVM7UUFQckIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7WUFDM0MsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUV6QixDQUFDO3lDQU1pQywwQkFBVyxFQUFrQixlQUFNLEVBQWdCLFdBQUk7T0FMN0UsU0FBUyxDQWtDckI7SUFBRCxnQkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIkxvZ2luUGFnZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiXSxcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICB1c2VyOiBVc2VyO1xyXG4gIGlzTG9nZ2luZ0luOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLnVzZXJuYW1lID0gXCJoaWV1XCI7XHJcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIjEyMzRcIjtcclxuIFxyXG5cclxuXHJcbiAgfVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19sb2dpblwiOyBcclxuICB9XHJcbiAgbG9naW4oKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSlcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBsb2dpblwiKVxyXG4gICAgICApO1xyXG5cclxuICB9XHJcbiAgcmVnaXN0ZXIoKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcikuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pXHJcblxyXG4gICAgfSwgKCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIHJlZ2lzdGVyXCIpKVxyXG4gIH1cclxuXHJcbn0gIl19