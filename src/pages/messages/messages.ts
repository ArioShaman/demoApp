import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { ContactsPage } from './../contacts/contacts';
import {  MESSAGES } from './messages-list'

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  public messages = MESSAGES;
  
  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.messages);
  }

}
