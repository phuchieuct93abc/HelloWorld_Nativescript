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
        this.isLoading = true;
        this.userService.login(this.user)
            .subscribe(function () {
            _this.router.navigate(["/list"]);
            _this.isLoading = false;
        }, function () { _this.isLoading = false; });
    };
    LoginPage.prototype.register = function () {
        var _this = this;
        this.userService.register(this.user).subscribe(function () {
            _this.router.navigate(["/list"]);
            _this.isLoading = false;
        }, function () { _this.isLoading = false; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFnRDtBQUNoRCxpRUFBK0Q7QUFDL0Qsc0NBQWtEO0FBQ2xELCtDQUE4QztBQUM5QywwQ0FBZ0Q7QUFTaEQ7SUFNRSxtQkFBb0IsV0FBd0IsRUFBVSxNQUFjLEVBQVUsSUFBVTtRQUFwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3RGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBSTlCLENBQUM7SUFDRCw0QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO0lBQy9DLENBQUM7SUFDRCx5QkFBSyxHQUFMO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzlCLFNBQVMsQ0FDUjtZQUNFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV6QixDQUFDLEVBQ0QsY0FBUSxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUMsQ0FFakMsQ0FBQztJQUVOLENBQUM7SUFDRCw0QkFBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtZQUMvQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV6QixDQUFDLEVBQUUsY0FBUSxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUMsQ0FDbEMsQ0FBQTtJQUNILENBQUM7SUF2Q1UsU0FBUztRQVByQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztZQUMzQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBRXpCLENBQUM7eUNBT2lDLDBCQUFXLEVBQWtCLGVBQU0sRUFBZ0IsV0FBSTtPQU43RSxTQUFTLENBeUNyQjtJQUFELGdCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiTG9naW5QYWdlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCJdLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHVzZXI6IFVzZXI7XHJcbiAgaXNMb2dnaW5nSW46IGJvb2xlYW47XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLnVzZXJuYW1lID0gXCJoaWV1XCI7XHJcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIjEyMzRcIjtcclxuXHJcblxyXG5cclxuICB9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2xvZ2luXCI7XHJcbiAgfVxyXG4gIGxvZ2luKCkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7IHRoaXMuaXNMb2FkaW5nID0gZmFsc2UgfVxyXG5cclxuICAgICAgKTtcclxuXHJcbiAgfVxyXG4gIHJlZ2lzdGVyKCkge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKVxyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAgIH0sICgpID0+IHsgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZSB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxufSAiXX0=