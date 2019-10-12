import { createAction, props } from '@ngrx/store';

export const inrcemnet = createAction("[Counter] increment");
export const dercemnet = createAction("[Counter] decrement");
export const addValue = createAction("[Counter] addValue", props<{value:number}>());