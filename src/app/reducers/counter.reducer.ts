import { createReducer, on } from "@ngrx/store";
import { inrcemnet, dercemnet, addValue } from "./../actions/counter.action";

export const initialState = 10;

const _counterReducer = createReducer(initialState, 
	on(inrcemnet, (state)=>{
		console.log(state);
		state = state+1
		return state;
	}), 
	on(dercemnet, (state)=>{
		console.log(state);
		return state-1;
	}),
	on(addValue, (state, action)=>{
		console.log(typeof action);
		return state + parseInt( action.value.toString() );
	}),
);

export function counterReducer(state, action){
	return _counterReducer(state, action);
}
