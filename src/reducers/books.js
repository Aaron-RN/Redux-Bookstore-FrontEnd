import {
  CREATE_BOOK, REMOVE_BOOK, FETCH_BOOKLIST,
  CREATE_COMMENT, REMOVE_COMMENT,
} from '../actions/index';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKLIST:
      return [...action.response];
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    case CREATE_COMMENT:
      return [...state.filter(book => book.id !== action.book.id),
        {
          ...action.book,
          comments: [...action.book.comments, action.comment],
        }].sort((a, b) => a.id - b.id);
    case REMOVE_COMMENT:
      return [...state.filter(book => book.id !== action.book.id),
        {
          ...action.book,
          comments: [...action.book.comments.filter(comment => comment.id !== action.comment.id)],
        }].sort((a, b) => a.id - b.id);
    default:
      return state;
  }
};

export default bookReducer;
