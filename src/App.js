import React from 'react';
import BookList from './containers/BookList';
import BooksForm from './containers/BooksForm';
import Modal from './containers/Modal';
import './assets/css/App.css';

const App = () => (
  <div className="App">
    <div className="backBG bg-dark">
      <div className="container center">
        <BookList />
        <BooksForm />
        <Modal />
      </div>
    </div>
  </div>
);

export default App;
