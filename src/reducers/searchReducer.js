import { SEARCH_CHECK, SEARCH_CLEAR } from '../actions';

const initialState = {
  term: '',
  result: [],
}

export const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_CHECK: {
      return {
        ...state,
        result: action.payload
      }
    }

    case SEARCH_CLEAR: {
      return {
        ...state,
        result: []
      }
    }

    default:
      return state;
  }
}
