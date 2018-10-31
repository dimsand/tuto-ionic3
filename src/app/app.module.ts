import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieApiProvider } from '../providers/movie-api/movie-api';
import { MyMoviesPage } from '../pages/my-movies/my-movies';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';
import { MovieListPage } from '../pages/movie-list/movie-list';
import { FavoriteMovieProvider } from '../providers/favorite-movie/favorite-movie';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyMoviesPage,
    MovieDetailPage,
    MovieListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyMoviesPage,
    MovieDetailPage,
    MovieListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieApiProvider,
    HttpClientModule,
    FavoriteMovieProvider
  ]
})
export class AppModule {}
