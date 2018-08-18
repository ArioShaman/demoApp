import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MessagesPage } from '../pages/messages/messages';
import { ContactsPage } from '../pages/contacts/contacts';
import { ComponentsModule } from '../components/components.module';
import { ThemeServiceProvider } from '../providers/theme-service/theme-service';
import { Ng2CacheModule } from 'ng2-cache';
import { Geolocation } from '@ionic-native/geolocation';
import { LanguageServiceProvider } from '../providers/language-service/language-service';

@NgModule({
  declarations: [
    MyApp,
    MessagesPage,
    ContactsPage,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    Ng2CacheModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MessagesPage,
    ContactsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ThemeServiceProvider,
    LanguageServiceProvider
  ]
})
export class AppModule {}
