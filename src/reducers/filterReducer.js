import { FILTER_ACTIVE,
         FILTER_SUCCESS,
         FILTER_CLEAR } from '../actions';

const initialState = {
  data: [],
  filterActive: false
}

export const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case FILTER_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        filterActive: false
      }
    }

    case FILTER_CLEAR: {
      return {
        ...state,
        data: [],
        filterActive: false
      }
    }

    case FILTER_ACTIVE: {
      return {
        ...state,
        filterActive: true
      }
    }

    default:
      return state;
  }
}
