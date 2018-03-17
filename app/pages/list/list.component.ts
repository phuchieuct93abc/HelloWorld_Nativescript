import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TextField } from "ui/text-field";
import * as SocialShare from "nativescript-social-share";
import * as firebase from "nativescript-plugin-firebase";
import { Observable } from 'rxjs/Observable';
import { ChangeDetectorRef } from '@angular/core';
const citiesCollection = firebase.firestore.collection("heros");

@Component({
    selector: "List",
    templateUrl: "./pages/list/list.html",
    styleUrls: ["./pages/list/list-common.css"],
})
export class ListComponent implements OnInit {
    groceryList: Array<Object> = [];
    addItem: string;
    addedItemId: string;
    isLoading = true;
    isAdding = false;
    listLoaded = false;
    user: firebase.User;
    @ViewChild("groceryTextField") groceryTextField: ElementRef;
    constructor(private cd: ChangeDetectorRef) { }
    add() {
        if (this.addItem.trim() === "") {
            return;
        }
        this.dismisKeyboard();

        citiesCollection.add({ 
            name: this.addItem,
            userId:this.user.uid,
            time: new Date() }).then(() => this.addItem = "")



    }
    ngOnInit(): void {
        this.isLoading = true;
        this.isLoading = false;
        this.listLoaded = true;
        this.getCurrentUser();
        this.getChatList();








    }
    getCurrentUser() {
        firebase.getCurrentUser()
      .then(user => this.user = user)

    }
    getChatList() {
        citiesCollection.orderBy("time", "asc").onSnapshot((snapShot) => {
            this.groceryList = []
            snapShot.forEach(item => {

                this.groceryList.push(item.data())

            })
            this.cd.detectChanges();
        });
    }


    private dismisKeyboard() {
        let textField = <TextField>this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
    }



}