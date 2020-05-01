import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Comment from '../components/Comments';
import { addCommentToBook, removeCommentFromBook } from '../actions/index';
import '../assets/css/modal.css';

const Modal = ({
  books, showModal, addCommentToBook, removeCommentFromBook,
}) => {
  console.log(showModal);
  const renderMain = showModal
    ? (
      <div className="modal">
        <div className="modalContent">
          <header>
            <div>X</div>
          </header>
          <main className="bg-main">
            {books.map(book => (
              <Comment
                book={book}
                key={book.id + book.title}
                addCommentToBook={addCommentToBook}
                removeCommentFromBook={removeCommentFromBook}
              />
            ))}
          </main>
        </div>
      </div>
    )
    : (
      <div className="hide" />
    );

  return renderMain;
};

Modal.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  showModal: PropTypes.bool.isRequired,
  addCommentToBook: PropTypes.func.isRequired,
  removeCommentFromBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  showModal: state.showModal,
});

const mapDispatchToProps = dispatch => ({
  removeCommentFromBook: (book, comment) => {
    dispatch(removeCommentFromBook(book, comment));
  },
  addCommentToBook: (book, comment) => {
    dispatch(addCommentToBook(book, comment));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
