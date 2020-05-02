import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';
import loaderReducer from './loading';
import genresReducer from './genres';
import modalReducer from './modal';

const rootReducer = combineReducers({
  books: booksReducer,
  genres: genresReducer,
  filter: filterReducer,
  status: loaderReducer,
  modal: modalReducer,
});

export default rootReducer;
