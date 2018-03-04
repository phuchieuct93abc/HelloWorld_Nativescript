"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_component_1 = require("./pages/list/list.component");
var login_1 = require("./pages/login/login");
exports.routes = [
    { path: "", component: login_1.LoginPage },
    { path: "list", component: list_component_1.ListComponent }
];
exports.navigatableComponents = [
    login_1.LoginPage, list_component_1.ListComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhEQUE0RDtBQUM1RCw2Q0FBZ0Q7QUFFbkMsUUFBQSxNQUFNLEdBQUc7SUFDbEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxpQkFBUyxFQUFFO0lBQ2xDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtDQUM3QyxDQUFDO0FBRVcsUUFBQSxxQkFBcUIsR0FBRztJQUNqQyxpQkFBUyxFQUFDLDhCQUFhO0NBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9saXN0L2xpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi9wYWdlcy9sb2dpbi9sb2dpbic7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IExvZ2luUGFnZSB9LFxyXG4gICAgeyBwYXRoOiBcImxpc3RcIiwgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50IH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXHJcbiAgICBMb2dpblBhZ2UsTGlzdENvbXBvbmVudFxyXG5dOyJdfQ==