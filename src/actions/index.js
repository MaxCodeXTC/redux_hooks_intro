import { INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RESULT, DELETE_RESULT } from '../constants/actionTypes';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const add = (value) => ({ type: ADD, payload: value });
export const subtract = (value) => ({ type: SUBTRACT, payload: value });
export const storeResult = (result) => ({ type: STORE_RESULT, payload: result });
export const deleteResult = (id) => ({ type: DELETE_RESULT, payload: id });
