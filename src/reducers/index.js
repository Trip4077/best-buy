import { combineReducers } from 'redux';
import { getDataReducer } from './getDataReducer';
import { favoritesReducer } from './favoritesReducer';
import { filterReducer } from './filterReducer';
import { searchReducer } from './searchReducer';

export default combineReducers({
  getDataReducer,
  favoritesReducer,
  filterReducer,
  searchReducer
});
