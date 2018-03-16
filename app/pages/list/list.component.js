"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grocery_list_service_1 = require("./../../shared/grocery/grocery-list.service");
var core_1 = require("@angular/core");
var SocialShare = require("nativescript-social-share");
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
        this.dismisKeyboard();
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
        this.groceryListService.load().subscribe(function (list) {
            list.forEach(function (element) {
                _this.groceryList.unshift(element);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.share = function () {
        SocialShare.shareUrl("google.com", "test share google");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9GQUFpRjtBQUNqRixzQ0FBeUU7QUFFekUsdURBQXlEO0FBUXpEO0lBUUksdUJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBUDFELGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUdoQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUUyQyxDQUFDO0lBQy9ELDJCQUFHLEdBQUg7UUFBQSxpQkFnQkM7UUFmRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtRQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ3hELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxXQUFXLEdBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUdqQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDaEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDckMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksV0FBVyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBQ08sc0NBQWMsR0FBdEI7UUFDSSxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQy9ELFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFyQzhCO1FBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7a0NBQW1CLGlCQUFVOzJEQUFDO0lBUG5ELGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7WUFDM0MsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7U0FDbEMsQ0FBQzt5Q0FTMEMseUNBQWtCO09BUmpELGFBQWEsQ0FnRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyb2NlcnlMaXN0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS1saXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkxpc3RcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW0dyb2NlcnlMaXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZ3JvY2VyeUxpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuICAgIGFkZEl0ZW06IHN0cmluZztcclxuICAgIGFkZGVkSXRlbUlkOnN0cmluZztcclxuICAgIGlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBpc0FkZGluZyA9IGZhbHNlO1xyXG4gICAgbGlzdExvYWRlZCA9IGZhbHNlO1xyXG4gICAgQFZpZXdDaGlsZChcImdyb2NlcnlUZXh0RmllbGRcIikgZ3JvY2VyeVRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvY2VyeUxpc3RTZXJ2aWNlOiBHcm9jZXJ5TGlzdFNlcnZpY2UpIHsgfVxyXG4gICAgYWRkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZEl0ZW0udHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXNtaXNLZXlib2FyZCgpO1xyXG5cclxuICAgICAgICB0aGlzLmlzQWRkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFkZGVkSXRlbUlkID0gbnVsbFxyXG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmFkZCh0aGlzLmFkZEl0ZW0pLnN1YnNjcmliZSgobmV3SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQobmV3SXRlbSlcclxuICAgICAgICAgICAgdGhpcy5hZGRJdGVtID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5pc0FkZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFkZGVkSXRlbUlkPSBuZXdJdGVtLmlkO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmxvYWQoKS5zdWJzY3JpYmUoKGxpc3QpID0+IHtcclxuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGVsZW1lbnQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNoYXJlKCl7XHJcbiAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVVcmwoXCJnb29nbGUuY29tXCIsXCJ0ZXN0IHNoYXJlIGdvb2dsZVwiKVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkaXNtaXNLZXlib2FyZCgpIHtcclxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgfVxyXG5cclxuICBcclxuXHJcbn0iXX0=