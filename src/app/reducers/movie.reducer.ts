import { createReducer, on } from "@ngrx/store";
import { inrcemnet, dercemnet, addValue, movieLoadSuccess } from "./../actions/counter.action";

export const initialState = []


const _movieReducer = createReducer(initialState, 
	
	on(movieLoadSuccess, (state, action) => {
		return action.movies;
	})
);

export function movieReducer(state, action){
	return _movieReducer(state, action);
}
