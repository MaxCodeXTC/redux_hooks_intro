import { STORE_RESULT, DELETE_RESULT } from '../constants/actionTypes';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.payload }),
      };
    case DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter((result) => result.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
