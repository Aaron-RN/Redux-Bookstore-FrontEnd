import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentModal from '../components/CommentModal';
import GenreModal from '../components/GenreModal';
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
    this.genreForm = React.createRef();
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
    this.reset();
  }

  reset() {
    // if (e.target.name === 'comment') this.commentInput.current.value = '';
    // if (e.target.name === 'genre') this.genreInput.current.value = '';
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
    const { errors } = status;

    let renderMain;
    if (modal.type === 'comments' && modal.showModal) {
      renderMain = (
        <CommentModal
          book={selectedObject}
          comments={comments}
          errors={errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          removeCommentFromBook={removeCommentFromBook}
          toggleModal={toggleModal}
        />
      );
    }
    if (modal.type === 'genres' && modal.showModal) {
      renderMain = (
        <GenreModal
          genres={genres}
          errors={errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          removeGenreFromDB={removeGenreFromDB}
          toggleModal={toggleModal}
        />
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
