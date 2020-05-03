import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Comment from '../components/Comments';
import Genre from '../components/Genres';
import {
  addCommentToBook, removeCommentFromBook, addGenreToDB, removeGenreFromDB, toggleModal,
} from '../actions/index';
import '../assets/css/modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      genre: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.commentForm = React.createRef();
    this.commentInput = React.createRef();
    this.genreForm = React.createRef();
    this.genreInput = React.createRef();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { addCommentToBook, addGenreToDB, modal } = this.props;
    const { selectedObject } = modal;
    const { comment, genre } = this.state;
    e.preventDefault();
    if (e.target.name === 'comment') addCommentToBook(selectedObject, comment);
    if (e.target.name === 'genre') addGenreToDB(genre);
    this.reset(e);
  }

  reset(e) {
    if (e.target.name === 'comment') this.commentInput.current.value = '';
    if (e.target.name === 'genre') this.genreInput.current.value = '';
    this.setState({
      comment: '',
      genre: '',
    });
  }

  render() {
    const {
      status, modal, genres, removeCommentFromBook, removeGenreFromDB, toggleModal,
    } = this.props;
    const { selectedObject } = modal;
    const { comments } = selectedObject;
    const { errors, form } = status;
    const errorDiv = error => (
      <div key={error}>
        {error}
      </div>
    );
    const showErrorsGenre = form === 'genreForm' ? (
      <div className="errors">
        {errors.map(error => errorDiv(error))}
      </div>
    ) : null;
    const showErrorsComments = form === 'commentForm' ? (
      <div className="errors">
        {errors.map(error => errorDiv(error))}
      </div>
    ) : null;

    let renderMain;
    if (modal.type === 'comments' && modal.showModal) {
      renderMain = (
        <div className="modal">
          <div className="modalContent">
            <header>
              <button
                type="button"
                className="modalClose"
                onClick={() => toggleModal('comments', {})}
              >
                Close
              </button>
            </header>
            <main>
              <h2>{selectedObject.title}</h2>
              {comments.map(comment => (
                <Comment
                  book={selectedObject}
                  comment={comment}
                  key={comment.id + selectedObject.title}
                  removeCommentFromBook={removeCommentFromBook}
                />
              ))}
            </main>
            <footer ref={this.commentForm} className="comment-form">
              {showErrorsComments}
              <input
                ref={this.commentInput}
                name="comment"
                type="text"
                placeholder="type comment here..."
                minLength="3"
                maxLength="450"
                onChange={this.handleChange}
              />
              <button name="comment" type="button" onClick={this.handleSubmit}> Comment </button>
            </footer>
          </div>
        </div>
      );
    }
    if (modal.type === 'genres' && modal.showModal) {
      renderMain = (
        <div className="modal">
          <div className="modalContent">
            <header>
              <button
                type="button"
                className="modalClose"
                onClick={() => toggleModal('genres', {})}
              >
                Close
              </button>
            </header>
            <main>
              <h2>Genres</h2>
              {genres.map(genre => (
                <Genre
                  genre={genre}
                  key={genre.id + genre.name}
                  removeGenreFromDB={removeGenreFromDB}
                />
              ))}
            </main>
            <footer ref={this.genreForm} className="genre-form">
              {showErrorsGenre}
              <input
                ref={this.genreInput}
                name="genre"
                type="text"
                placeholder="type genre here..."
                minLength="3"
                maxLength="30"
                onChange={this.handleChange}
              />
              <button name="genre" type="button" onClick={this.handleSubmit}> Add Genre </button>
            </footer>
          </div>
        </div>
      );
    }
    return modal.showModal ? renderMain : null;
  }
}

Modal.propTypes = {
  status: PropTypes.instanceOf(Object).isRequired,
  genres: PropTypes.instanceOf(Array).isRequired,
  modal: PropTypes.instanceOf(Object).isRequired,
  addCommentToBook: PropTypes.func.isRequired,
  removeCommentFromBook: PropTypes.func.isRequired,
  addGenreToDB: PropTypes.func.isRequired,
  removeGenreFromDB: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  status: state.status,
  genres: state.genres,
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  removeCommentFromBook: (book, comment) => {
    dispatch(removeCommentFromBook(book, comment));
  },
  addCommentToBook: (book, comment) => {
    dispatch(addCommentToBook(book, comment));
  },
  removeGenreFromDB: genre => {
    dispatch(removeGenreFromDB(genre));
  },
  addGenreToDB: genre => {
    dispatch(addGenreToDB(genre));
  },
  toggleModal: (modalType, selectedObject) => {
    dispatch(toggleModal(modalType, selectedObject));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
