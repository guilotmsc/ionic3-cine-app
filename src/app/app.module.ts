import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CardIO } from '@ionic-native/card-io';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { AboutPage } from '../pages/about/about'; 
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MoviePage } from '../pages/movie/movie';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail'; 
import { StorePage } from '../pages/store/store';
import { StoreItemPage } from '../pages/store-item/store-item';
import { PaymentPage } from '../pages/payment/payment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    MyApp,
    AboutPage, 
    HomePage,
    TabsPage,
    LoginPage,
    MoviePage,
    MovieDetailPage, 
    StorePage,
    StoreItemPage,
    PaymentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage, 
    HomePage,
    TabsPage,
    LoginPage,
    MoviePage,
    MovieDetailPage, 
    StorePage,
    StoreItemPage,
    PaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CardIO,
    SQLite, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})

export class AppModule {}
