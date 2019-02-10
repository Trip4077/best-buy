import { /*FILTER_ACTIVE,*/
         FILTER_SUCCESS,
         FILTER_CLEAR } from '../actions';

const initialState = {
  data: [],
}

export const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case FILTER_SUCCESS: {
      return {
        ...state,
        data: action.payload
      }
    }

    case FILTER_CLEAR: {
      return {
        ...state,
        data: []
      }
    }

    default:
      return state;
  }
}
