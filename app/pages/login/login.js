"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("tns-core-modules/ui/page");
var user_service_1 = require("./../../shared/user/user.service");
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var router_1 = require("@angular/router");
var firebase = require("nativescript-plugin-firebase");
var LoginPage = /** @class */ (function () {
    function LoginPage(userService, router, page) {
        this.userService = userService;
        this.router = router;
        this.page = page;
        this.user = new user_1.User();
        this.user.username = "hieu@gmail.com";
        this.user.password = "123456";
    }
    LoginPage.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
        firebase.init({
            persist: true
        }).then(function (instance) {
            console.dir(instance);
            console.log("firebase.init done");
            var citiesCollection = firebase.firestore.collection("heros");
            var unsubscribe = citiesCollection.onSnapshot(function (snapshot) {
                snapshot.forEach(function (city) { return console.dir(city.data()); });
            });
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
        ;
    };
    LoginPage.prototype.login = function () {
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: 'hieu@gmail.com',
                password: 'hieu1234'
            }
        })
            .then(function (result) { return console.dir(result); })
            .catch(function (error) { return console.log(error); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFnRDtBQUNoRCxpRUFBK0Q7QUFDL0Qsc0NBQWtEO0FBQ2xELCtDQUE4QztBQUM5QywwQ0FBZ0Q7QUFDaEQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFVekQ7SUFNRSxtQkFBb0IsV0FBd0IsRUFBVSxNQUFjLEVBQVUsSUFBVTtRQUFwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3RGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFJaEMsQ0FBQztJQUNELDRCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUFDaEQsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNYLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFVLFFBQVE7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV0RSxJQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsVUFBQyxRQUFRO2dCQUN2RCxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDO1FBQ0MsQ0FBQyxFQUNELFVBQVUsS0FBSztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUNKLENBQUM7UUFBQSxDQUFDO0lBR0QsQ0FBQztJQUNELHlCQUFLLEdBQUw7UUFDRixRQUFRLENBQUMsS0FBSyxDQUNSO1lBQ0UsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsUUFBUSxFQUFFLFVBQVU7YUFDckI7U0FDRixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQzthQUNuQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFHeEMsQ0FBQztJQUNELDRCQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDN0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1lBQy9CLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXpCLENBQUMsRUFBRSxjQUFRLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUNsQyxDQUFBO0lBQ0gsQ0FBQztJQXpEVSxTQUFTO1FBUHJCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FFekIsQ0FBQzt5Q0FPaUMsMEJBQVcsRUFBa0IsZUFBTSxFQUFnQixXQUFJO09BTjdFLFNBQVMsQ0EyRHJCO0lBQUQsZ0JBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiTG9naW5QYWdlXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCJdLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHVzZXI6IFVzZXI7XHJcbiAgaXNMb2dnaW5nSW46IGJvb2xlYW47XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLnVzZXJuYW1lID0gXCJoaWV1QGdtYWlsLmNvbVwiO1xyXG4gICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCIxMjM0NTZcIjtcclxuXHJcblxyXG5cclxuICB9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2xvZ2luXCI7XHJcbiBmaXJlYmFzZS5pbml0KHtcclxuICAgIHBlcnNpc3Q6IHRydWVcclxuICB9KS50aGVuKFxyXG4gICAgZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgIGNvbnNvbGUuZGlyKGluc3RhbmNlKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcclxuICAgICAgY29uc3QgY2l0aWVzQ29sbGVjdGlvbiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKFwiaGVyb3NcIik7XHJcblxyXG5jb25zdCB1bnN1YnNjcmliZSA9IGNpdGllc0NvbGxlY3Rpb24ub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcclxuICBzbmFwc2hvdC5mb3JFYWNoKGNpdHkgPT4gY29uc29sZS5kaXIoY2l0eS5kYXRhKCkpKTtcclxufSk7XHJcbiAgICB9LFxyXG4gICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICB9XHJcbik7O1xyXG5cclxuXHJcbiAgfVxyXG4gIGxvZ2luKCkge1xyXG5maXJlYmFzZS5sb2dpbihcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcclxuICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcclxuICAgICAgICAgIGVtYWlsOiAnaGlldUBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICdoaWV1MTIzNCdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmRpcihyZXN1bHQpKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICBcclxuXHJcbiAgfVxyXG4gIHJlZ2lzdGVyKCkge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKVxyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAgIH0sICgpID0+IHsgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZSB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxufSAiXX0=