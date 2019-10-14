import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
import { inrcemnet, dercemnet, addValue, movieLoad, movieLoadSuccess} from "../actions/counter.action";
import { Movie} from '../app.models';

@Injectable()
export class MovieEffects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(movieLoad),
    mergeMap(() => this.moviesService.getAll()
      .pipe(
        map( (movies:Movie[]) => {
            console.log(movies);
            return movieLoadSuccess({movies:movies});
        },
        catchError(() => EMPTY)
      ))
    )
  ));
 
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}