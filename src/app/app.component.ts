import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MessagesPage } from '../pages/messages/messages';
import { ContactsPage } from '../pages/contacts/contacts';
import { App, ViewController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: NavController;

  public rootPage:string = 'messages';
  public currentRoot:any;
  public opened:boolean =  false;
  public active:boolean =  false;
  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              // public navCtrl: NavController,
    ) {

    // console.log(this.app.getRootNav());
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.nav.setRoot(MessagesPage);
    });
  }

   public messages(){
     this.nav.setRoot(MessagesPage);
     this.rootPage = 'messages';
   }

   public contacts(){
     this.nav.setRoot(ContactsPage);
     this.rootPage = 'contacts';
   }

   public open(){
     this.opened = true;
     this.active = false;
   }

   public close():void{
     this.active = false;
     this.opened = false;
   }

   onChange(){
     this.active = false;
   }
}
