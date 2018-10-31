import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieListPage } from '../movie-list/movie-list';
import { FavoriteMovieProvider } from '../../providers/favorite-movie/favorite-movie';
import { IMovie } from '../../interface/IMovie';
import { MovieDetailPage } from '../movie-detail/movie-detail';

@IonicPage()
@Component({
  selector: 'page-my-movies',
  templateUrl: 'my-movies.html',
})
export class MyMoviesPage {

  favoriteMovies: IMovie[] = [];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private favoriteMovieProvider: FavoriteMovieProvider
    ) {}
 
    ionViewWillEnter() {
      this.initFavoriteMovies();
    }
   
    private initFavoriteMovies() {
      this.favoriteMovieProvider
        .getFavoriteMovies()
        .then(favs => (this.favoriteMovies = favs));
    }
   
    findMovie() {
      this.navCtrl.push(MovieListPage);
    }
   
    goToDetail(movie: IMovie) {
      this.navCtrl.push(MovieDetailPage, movie);
    }
}
