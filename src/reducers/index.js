import { combineReducers } from 'redux';
import { getDataReducer } from './getDataReducer';
import { favoritesReducer } from './favoritesReducer';

export default combineReducers({
  getDataReducer,
  favoritesReducer
});
