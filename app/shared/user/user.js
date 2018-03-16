"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("email-validator");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.username);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUUzQztJQUFBO0lBTUEsQ0FBQztJQUhHLDJCQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHZhbGlkYXRvciA9IHJlcXVpcmUoXCJlbWFpbC12YWxpZGF0b3JcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlcntcclxuICAgIHVzZXJuYW1lOnN0cmluZztcclxuICAgIHBhc3N3b3JkOnN0cmluZztcclxuICAgIGlzVmFsaWRFbWFpbCgpe1xyXG4gICAgICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUodGhpcy51c2VybmFtZSk7IFxyXG4gICAgfVxyXG59Il19