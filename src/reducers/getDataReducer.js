import { GET_ACTIVE,
         GET_SUCCESS,
         GET_FAIL } from '../actions';

const initialState = {
  getActive: false,
  getSuccess: false,
  data: [],
  err: ''
}

export const getDataReducer = (state= initialState, action) => {
  switch(action.type) {
    case GET_ACTIVE:
      return {
        ...state,
        getActive: true
      }

    case GET_SUCCESS:
      return {
        ...state,
        getActive: false,
        data: action.payload,
        err: ''
      }

    case GET_FAIL:
      return {
        ...state,
        getActive: false,
        err: action.payload
      }
      
    default:
      return state;
  }
}
