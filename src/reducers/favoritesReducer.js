import { ADD_FAVORITE } from '../actions';

const initialState = {
    favorites: [],
}

export const favoritesReducer = (state = initialState, action) =>  {
  switch(action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: action.payload
      }

    default:
      return state;
  }
}
