import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { inrcemnet, dercemnet, addValue, movieLoad, movieLoadSuccess} from "./actions/counter.action";
import { MoviesService } from './services/movies.service';

import { Movie} from './app.models';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent  implements OnInit{
  title = "ngrx-tut";
  count: Observable<number>;
  movies$:Observable<Movie[]> = this.store.select(state =>{
    return state.movies;
  });
  //movies:any;

  constructor(
    private store: Store<{ count: number, movies: Movie[] }>,
    private movieService:MoviesService
  ) {
    this.count = store.pipe(select("count"));
    console.log(this.count);
  }

  ngOnInit() {
    console.log("movie load dispatch")
    this.store.dispatch(movieLoad());
    // this.movieService.getAll().subscribe(movies => {  
    //   console.log(movies);
    //   this.movies = movies
    // });
  }

  onDecrement() {
    this.store.dispatch(dercemnet());
  }

  onIncrement() {
    this.store.dispatch(inrcemnet());
  }

  onAddCustomValue(value) {
    this.store.dispatch(addValue({ value }));
  }

}
