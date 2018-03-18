import { Component, OnInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
import { TextField } from "ui/text-field";
import * as firebase from "nativescript-plugin-firebase";
import { ChangeDetectorRef } from '@angular/core';

const chatCollection = firebase.firestore.collection("chats");

@Component({
    selector: "Chat",
    templateUrl: "./pages/chat/chat.html",
    styleUrls: ["./pages/chat/chat.css"],
})
export class ChatComponent implements OnInit {
    chatList: Array<Object> = [];
    addMessage: string;
    user: firebase.User;

    @ViewChild("groceryTextField") groceryTextField: ElementRef;
    constructor(private cd: ChangeDetectorRef, private zone: NgZone) { }
    add() {
        this.dismisKeyboard();

        chatCollection.add({
            message: this.addMessage,
            userId: this.user.uid,
            time: new Date()
        }).then(() => this.addMessage = "")



    }
    ngOnInit(): void {
        this.getCurrentUser();
        this.getChatList();
    }

    getCurrentUser() {
        firebase.getCurrentUser()
            .then(user => this.user = user)

    }

    getChatList() {
        chatCollection.orderBy("time", "asc").onSnapshot((snapShot) => {
            this.chatList = []
            snapShot.forEach(item => {
                this.zone.run(() => {
                    this.chatList.push(item.data())

                })
            })

        });
    }

    deleteAll() {

        chatCollection.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                chatCollection.doc(doc.id).delete();
            });
        });
    }

    private dismisKeyboard() {
        let textField = <TextField>this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
    }



}