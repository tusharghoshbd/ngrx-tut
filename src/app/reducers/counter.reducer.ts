import { createReducer, on } from "@ngrx/store";
import { inrcemnet, dercemnet } from "./../actions/counter.action";

export const initialState = 0;

const _counterReducer = createReducer(initialState, 
	on(inrcemnet, (state)=>{
		console.log(state);
		state = state+1
		return state;
	}), 
	on(dercemnet, (state)=>{
		console.log(state);
		return state-1;
	}));

export function counterReducer(state, action){
	return _counterReducer(state, action);
}
