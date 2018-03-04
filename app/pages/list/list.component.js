"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grocery_list_service_1 = require("./../../shared/grocery/grocery-list.service");
var core_1 = require("@angular/core");
var ListComponent = /** @class */ (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
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
        this.isAdding = true;
        this.addedItemId = null;
        this.groceryListService.add(this.addItem).subscribe(function (newItem) {
            _this.groceryList.unshift(newItem);
            _this.addItem = "";
            _this.isAdding = false;
            _this.addedItemId = newItem.id;
        });
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.dismisKeyboard();
        this.groceryListService.load().subscribe(function (list) {
            list.forEach(function (element) {
                _this.groceryList.unshift(element);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
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
            providers: [grocery_list_service_1.GroceryListService]
        }),
        __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9GQUFpRjtBQUNqRixzQ0FBeUU7QUFTekU7SUFRSSx1QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFQMUQsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBR2hDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRTJDLENBQUM7SUFDL0QsMkJBQUcsR0FBSDtRQUFBLGlCQWNDO1FBYkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtRQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ3hELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxXQUFXLEdBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUdqQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQ2hCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBRU8sc0NBQWMsR0FBdEI7UUFDSSxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQy9ELFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFqQzhCO1FBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7a0NBQW1CLGlCQUFVOzJEQUFDO0lBUG5ELGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7WUFDM0MsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7U0FDbEMsQ0FBQzt5Q0FTMEMseUNBQWtCO09BUmpELGFBQWEsQ0E0Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyb2NlcnlMaXN0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS1saXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkxpc3RcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW0dyb2NlcnlMaXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZ3JvY2VyeUxpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuICAgIGFkZEl0ZW06IHN0cmluZztcclxuICAgIGFkZGVkSXRlbUlkOnN0cmluZztcclxuICAgIGlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBpc0FkZGluZyA9IGZhbHNlO1xyXG4gICAgbGlzdExvYWRlZCA9IGZhbHNlO1xyXG4gICAgQFZpZXdDaGlsZChcImdyb2NlcnlUZXh0RmllbGRcIikgZ3JvY2VyeVRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvY2VyeUxpc3RTZXJ2aWNlOiBHcm9jZXJ5TGlzdFNlcnZpY2UpIHsgfVxyXG4gICAgYWRkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZEl0ZW0udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0FkZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hZGRlZEl0ZW1JZCA9IG51bGxcclxuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5hZGQodGhpcy5hZGRJdGVtKS5zdWJzY3JpYmUoKG5ld0l0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KG5ld0l0ZW0pXHJcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hZGRlZEl0ZW1JZD0gbmV3SXRlbS5pZDtcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpc21pc0tleWJvYXJkKCk7XHJcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UubG9hZCgpLnN1YnNjcmliZSgobGlzdCkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZWxlbWVudClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXNtaXNLZXlib2FyZCgpIHtcclxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgfVxyXG5cclxuICBcclxuXHJcbn0iXX0=