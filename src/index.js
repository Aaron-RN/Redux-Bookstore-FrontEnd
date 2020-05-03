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
  genres: [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Biography' },
    { id: 3, name: 'Kids' },
    { id: 4, name: 'Learning' },
    { id: 5, name: 'Sci-Fi' },
    { id: 6, name: 'Horor' },
    { id: 7, name: 'History' },
  ],
  status: { isLoading: false, errors: [] },
  modal: { showModal: false, type: 'comments', selectedObject: {} },
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
