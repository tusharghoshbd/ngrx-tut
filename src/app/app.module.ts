import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MovieEffects } from './effects/movie.effects';

import { movieReducer } from './reducers/movie.reducer';
import { counterReducer } from './reducers/counter.reducer';

import { AppComponent } from './app.component';

import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    EffectsModule.forRoot([MovieEffects]),
    StoreModule.forRoot({ count: counterReducer, movies: movieReducer })
    
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
