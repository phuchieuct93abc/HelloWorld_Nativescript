"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var core_2 = require("@angular/core");
var chatCollection = firebase.firestore.collection("chats");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(cd, zone) {
        this.cd = cd;
        this.zone = zone;
        this.chatList = [];
    }
    ChatComponent.prototype.add = function () {
        var _this = this;
        this.dismisKeyboard();
        chatCollection.add({
            message: this.addMessage,
            userId: this.user.uid,
            time: new Date()
        }).then(function () { return _this.addMessage = ""; });
    };
    ChatComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
        this.getChatList();
    };
    ChatComponent.prototype.getCurrentUser = function () {
        var _this = this;
        firebase.getCurrentUser()
            .then(function (user) { return _this.user = user; });
    };
    ChatComponent.prototype.getChatList = function () {
        var _this = this;
        chatCollection.orderBy("time", "asc").onSnapshot(function (snapShot) {
            _this.chatList = [];
            snapShot.forEach(function (item) {
                _this.zone.run(function () {
                    _this.chatList.push(item.data());
                });
            });
        });
    };
    ChatComponent.prototype.deleteAll = function () {
        chatCollection.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                chatCollection.doc(doc.id).delete();
            });
        });
    };
    ChatComponent.prototype.dismisKeyboard = function () {
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
    };
    __decorate([
        core_1.ViewChild("groceryTextField"),
        __metadata("design:type", core_1.ElementRef)
    ], ChatComponent.prototype, "groceryTextField", void 0);
    ChatComponent = __decorate([
        core_1.Component({
            selector: "Chat",
            templateUrl: "./pages/chat/chat.html",
            styleUrls: ["./pages/chat/chat.css"],
        }),
        __metadata("design:paramtypes", [core_2.ChangeDetectorRef, core_1.NgZone])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RjtBQUU1Rix1REFBeUQ7QUFDekQsc0NBQWtEO0FBRWxELElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBTzlEO0lBTUksdUJBQW9CLEVBQXFCLEVBQVUsSUFBWTtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFML0QsYUFBUSxHQUFrQixFQUFFLENBQUM7SUFLc0MsQ0FBQztJQUNwRSwyQkFBRyxHQUFIO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ3JCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtTQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFBO0lBSXZDLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUFBLGlCQUlDO1FBSEcsUUFBUSxDQUFDLGNBQWMsRUFBRTthQUNwQixJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFBO0lBRXZDLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQUEsaUJBV0M7UUFWRyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBQyxRQUFRO1lBQ3RELEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO1lBQ2xCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNqQixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDVixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtnQkFFbkMsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQTtRQUVOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFFSSxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsYUFBYTtZQUNuQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDckIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxzQ0FBYyxHQUF0QjtRQUNJLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDL0QsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQWxEOEI7UUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQztrQ0FBbUIsaUJBQVU7MkRBQUM7SUFMbkQsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO3lDQU8wQix3QkFBaUIsRUFBZ0IsYUFBTTtPQU50RCxhQUFhLENBMkR6QjtJQUFELG9CQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuY29uc3QgY2hhdENvbGxlY3Rpb24gPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbihcImNoYXRzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJDaGF0XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2NoYXQvY2hhdC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvY2hhdC9jaGF0LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY2hhdExpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuICAgIGFkZE1lc3NhZ2U6IHN0cmluZztcclxuICAgIHVzZXI6IGZpcmViYXNlLlVzZXI7XHJcblxyXG4gICAgQFZpZXdDaGlsZChcImdyb2NlcnlUZXh0RmllbGRcIikgZ3JvY2VyeVRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XHJcbiAgICBhZGQoKSB7XHJcbiAgICAgICAgdGhpcy5kaXNtaXNLZXlib2FyZCgpO1xyXG5cclxuICAgICAgICBjaGF0Q29sbGVjdGlvbi5hZGQoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLmFkZE1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VyLnVpZCxcclxuICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKVxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4gdGhpcy5hZGRNZXNzYWdlID0gXCJcIilcclxuXHJcblxyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICB0aGlzLmdldENoYXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudFVzZXIoKSB7XHJcbiAgICAgICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKVxyXG4gICAgICAgICAgICAudGhlbih1c2VyID0+IHRoaXMudXNlciA9IHVzZXIpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldENoYXRMaXN0KCkge1xyXG4gICAgICAgIGNoYXRDb2xsZWN0aW9uLm9yZGVyQnkoXCJ0aW1lXCIsIFwiYXNjXCIpLm9uU25hcHNob3QoKHNuYXBTaG90KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhdExpc3QgPSBbXVxyXG4gICAgICAgICAgICBzbmFwU2hvdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGF0TGlzdC5wdXNoKGl0ZW0uZGF0YSgpKVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUFsbCgpIHtcclxuXHJcbiAgICAgICAgY2hhdENvbGxlY3Rpb24uZ2V0KCkudGhlbihxdWVyeVNuYXBzaG90ID0+IHtcclxuICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGF0Q29sbGVjdGlvbi5kb2MoZG9jLmlkKS5kZWxldGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXNtaXNLZXlib2FyZCgpIHtcclxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59Il19