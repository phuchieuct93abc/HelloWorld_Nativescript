"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.groceryList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.groceryList = [
            { title: "Apple" },
            { title: "Banana" },
            { title: "Orange" },
        ];
    };
    ListComponent.prototype.onItemTap = function (event) {
        console.dir(event);
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "List",
            templateUrl: "./pages/list/list.html",
            styleUrls: ["./pages/list/list-common.css"]
        })
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQU1sRDtJQUxBO1FBTUksZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO0lBY3BDLENBQUM7SUFiRyxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNmLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtZQUNsQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7WUFDbkIsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1NBQ3RCLENBQUE7SUFFTCxDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFiUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzlDLENBQUM7T0FDVyxhQUFhLENBZXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTGlzdFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2xpc3QvbGlzdC1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGdyb2NlcnlMaXN0OiBBcnJheTxPYmplY3Q+ID0gW107XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0ID0gW1xyXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkFwcGxlXCIgfSxcclxuICAgICAgICAgICAgeyB0aXRsZTogXCJCYW5hbmFcIiB9LFxyXG4gICAgICAgICAgICB7IHRpdGxlOiBcIk9yYW5nZVwiIH0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1UYXAoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmRpcihldmVudClcclxuICAgIH1cclxuXHJcbn0iXX0=