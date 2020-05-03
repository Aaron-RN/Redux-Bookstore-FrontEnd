import { CREATE_GENRE, REMOVE_GENRE, FETCH_GENRES } from '../actions/index';

const genresReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_GENRES:
      return [...action.response];
    case CREATE_GENRE:
      return [...state, action.genre];
    case REMOVE_GENRE:
      return state.filter(genre => genre.id !== action.genre.id);
    default:
      return state;
  }
};

export default genresReducer;
