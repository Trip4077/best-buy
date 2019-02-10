import { combineReducers } from 'redux';
import { getDataReducer } from './getDataReducer';
import { favoritesReducer } from './favoritesReducer';
import { filterReducer } from './filterReducer';

export default combineReducers({
  getDataReducer,
  favoritesReducer,
  filterReducer
});
