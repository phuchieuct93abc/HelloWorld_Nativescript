"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var core_2 = require("@angular/core");
var citiesCollection = firebase.firestore.collection("heros");
var ListComponent = /** @class */ (function () {
    function ListComponent(cd) {
        this.cd = cd;
        this.groceryList = [];
        this.isLoading = true;
        this.isAdding = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.addItem.trim() === "") {
            return;
        }
        this.dismisKeyboard();
        citiesCollection.add({
            name: this.addItem,
            userId: this.user.uid,
            time: new Date()
        }).then(function () { return _this.addItem = ""; });
    };
    ListComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.isLoading = false;
        this.listLoaded = true;
        this.getCurrentUser();
        this.getChatList();
    };
    ListComponent.prototype.getCurrentUser = function () {
        var _this = this;
        firebase.getCurrentUser()
            .then(function (user) { return _this.user = user; });
    };
    ListComponent.prototype.getChatList = function () {
        var _this = this;
        citiesCollection.orderBy("time", "asc").onSnapshot(function (snapShot) {
            _this.groceryList = [];
            snapShot.forEach(function (item) {
                _this.groceryList.push(item.data());
            });
            _this.cd.detectChanges();
        });
    };
    ListComponent.prototype.dismisKeyboard = function () {
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
    };
    __decorate([
        core_1.ViewChild("groceryTextField"),
        __metadata("design:type", core_1.ElementRef)
    ], ListComponent.prototype, "groceryTextField", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: "List",
            templateUrl: "./pages/list/list.html",
            styleUrls: ["./pages/list/list-common.css"],
        }),
        __metadata("design:paramtypes", [core_2.ChangeDetectorRef])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUd6RSx1REFBeUQ7QUFFekQsc0NBQWtEO0FBQ2xELElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFPaEU7SUFTSSx1QkFBb0IsRUFBcUI7UUFBckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFSekMsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBR2hDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRzBCLENBQUM7SUFDOUMsMkJBQUcsR0FBSDtRQUFBLGlCQWFDO1FBWkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1lBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTztZQUNsQixNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ3BCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtTQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUE7SUFJekQsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBU3ZCLENBQUM7SUFDRCxzQ0FBYyxHQUFkO1FBQUEsaUJBSUM7UUFIRyxRQUFRLENBQUMsY0FBYyxFQUFFO2FBQzFCLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixDQUFDLENBQUE7SUFFakMsQ0FBQztJQUNELG1DQUFXLEdBQVg7UUFBQSxpQkFVQztRQVRHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQUMsUUFBUTtZQUN4RCxLQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQTtZQUNyQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFFakIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7WUFFdEMsQ0FBQyxDQUFDLENBQUE7WUFDRixLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdPLHNDQUFjLEdBQXRCO1FBQ0ksSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUMvRCxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBcEQ4QjtRQUE5QixnQkFBUyxDQUFDLGtCQUFrQixDQUFDO2tDQUFtQixpQkFBVTsyREFBQztJQVJuRCxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzlDLENBQUM7eUNBVTBCLHdCQUFpQjtPQVRoQyxhQUFhLENBZ0V6QjtJQUFELG9CQUFDO0NBQUEsQUFoRUQsSUFnRUM7QUFoRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5jb25zdCBjaXRpZXNDb2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJoZXJvc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTGlzdFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBncm9jZXJ5TGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG4gICAgYWRkSXRlbTogc3RyaW5nO1xyXG4gICAgYWRkZWRJdGVtSWQ6IHN0cmluZztcclxuICAgIGlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBpc0FkZGluZyA9IGZhbHNlO1xyXG4gICAgbGlzdExvYWRlZCA9IGZhbHNlO1xyXG4gICAgdXNlcjogZmlyZWJhc2UuVXNlcjtcclxuICAgIEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcbiAgICBhZGQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkSXRlbS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpc21pc0tleWJvYXJkKCk7XHJcblxyXG4gICAgICAgIGNpdGllc0NvbGxlY3Rpb24uYWRkKHsgXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuYWRkSXRlbSxcclxuICAgICAgICAgICAgdXNlcklkOnRoaXMudXNlci51aWQsXHJcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCkgfSkudGhlbigoKSA9PiB0aGlzLmFkZEl0ZW0gPSBcIlwiKVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRDaGF0TGlzdCgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50VXNlcigpIHtcclxuICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpXHJcbiAgICAgIC50aGVuKHVzZXIgPT4gdGhpcy51c2VyID0gdXNlcilcclxuXHJcbiAgICB9XHJcbiAgICBnZXRDaGF0TGlzdCgpIHtcclxuICAgICAgICBjaXRpZXNDb2xsZWN0aW9uLm9yZGVyQnkoXCJ0aW1lXCIsIFwiYXNjXCIpLm9uU25hcHNob3QoKHNuYXBTaG90KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QgPSBbXVxyXG4gICAgICAgICAgICBzbmFwU2hvdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaChpdGVtLmRhdGEoKSlcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGRpc21pc0tleWJvYXJkKCkge1xyXG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZ3JvY2VyeVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iXX0=