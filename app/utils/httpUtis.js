"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var HttpUtils = /** @class */ (function () {
    function HttpUtils(http) {
        this.http = http;
    }
    HttpUtils.prototype.get = function (url) {
        console.log("start get" + url);
        return this.http.get(url)
            .map(function (response) { return response["_body"]; })
            .catch(this.handleErrors);
    };
    HttpUtils.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    HttpUtils = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], HttpUtils);
    return HttpUtils;
}());
exports.default = HttpUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFV0aXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwVXRpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QyxzQ0FBMkM7QUFDM0Msc0NBQXFDO0FBRXJDO0lBQ0ksbUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUNuQyx1QkFBRyxHQUFILFVBQUksR0FBRztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7YUFDcEIsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFqQixDQUFpQixDQUFDO2FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELGdDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBWGdCLFNBQVM7UUFEN0IsaUJBQVUsRUFBRTt5Q0FFaUIsV0FBSTtPQURiLFNBQVMsQ0FZN0I7SUFBRCxnQkFBQztDQUFBLEFBWkQsSUFZQztrQkFab0IsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwVXRpbHN7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG4gICAgZ2V0KHVybCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydCBnZXRcIit1cmwpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlW1wiX2JvZHlcIl0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==