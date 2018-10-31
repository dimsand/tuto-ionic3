import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MovieDetailPage } from "../movie-detail/movie-detail";
import { IMovie } from "../../interface/IMovie";
import { MovieApiProvider } from "../../providers/movie-api/movie-api";
 
@IonicPage()
@Component({
  selector: "page-movie-list",
  templateUrl: "movie-list.html"
})
export class MovieListPage {

  movies  = new Array<IMovie>();
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieApiProvider: MovieApiProvider) {}
 
  ionViewDidLoad() {
    this.movieApiProvider.getMovies().subscribe(data =>{
      this.movies = data;
    })
  }
 
  goToDetail(movie: IMovie) {
    this.navCtrl.push(MovieDetailPage, movie);
  }
}
