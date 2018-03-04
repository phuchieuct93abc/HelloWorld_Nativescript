import { GroceryListService } from './../../shared/grocery/grocery-list.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TextField } from "ui/text-field";

@Component({
    selector: "List",
    templateUrl: "./pages/list/list.html",
    styleUrls: ["./pages/list/list-common.css"],
    providers: [GroceryListService]
})
export class ListComponent implements OnInit {
    groceryList: Array<Object> = [];
    addItem: string;
    addedItemId:string;
    isLoading = true;
    isAdding = false;
    listLoaded = false;
    @ViewChild("groceryTextField") groceryTextField: ElementRef;
    constructor(private groceryListService: GroceryListService) { }
    add() {
        if (this.addItem.trim() === "") {
            return;
        }
        this.isAdding = true;
        this.addedItemId = null
        this.groceryListService.add(this.addItem).subscribe((newItem) => {
            this.groceryList.unshift(newItem)
            this.addItem = "";
            this.isAdding = false;
            this.addedItemId= newItem.id;
           

        })
    }
    ngOnInit(): void {
        this.isLoading = true;
        this.dismisKeyboard();
        this.groceryListService.load().subscribe((list) => {
            list.forEach(element => {
                this.groceryList.unshift(element)
            });
            this.isLoading = false;
            this.listLoaded = true;
        })

    }

    private dismisKeyboard() {
        let textField = <TextField>this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
    }

  

}