import { Component, OnInit } from '@angular/core';
@Component({
    selector: "List",
    templateUrl: "./pages/list/list.html",
    styleUrls: ["./pages/list/list-common.css"]
})
export class ListComponent implements OnInit {
    groceryList: Array<Object> = [];
    ngOnInit(): void {
        this.groceryList = [
            { title: "Apple" },
            { title: "Banana" },
            { title: "Orange" },
        ]

    }

    onItemTap(event) {
        console.dir(event)
    }

}