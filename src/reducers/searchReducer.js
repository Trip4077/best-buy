import { SEARCH_CHECK } from '../actions';

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

    default:
      return state;
  }
}
