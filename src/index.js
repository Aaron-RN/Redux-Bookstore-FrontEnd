import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './assets/css/index.css';

import rootReducer from './reducers/index';
import App from './App';
import { fetchBookList, fetchGenres } from './actions';

const initialState = {
  books: [],
  genres: ['Action', 'Biography', 'Kids', 'Learning', 'Sci-Fi', 'Horor', 'History'],
  status: { isLoading: false, errors: [] },
  showModal: false,
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
store.dispatch(fetchBookList());
store.dispatch(fetchGenres());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
