import { createAction, props } from '@ngrx/store';
import { Movie} from '../app.models';

export const inrcemnet = createAction("[Counter] increment");
export const dercemnet = createAction("[Counter] decrement");
export const addValue = createAction("[Counter] addValue", props<{value:number}>());

export const movieLoad = createAction("[Movie] movieLoad");
export const movieLoadSuccess = createAction("[Movie] movieLoadSuccess", props<{movies:Movie[]}>());

//[Movies API] Movies Loaded Success