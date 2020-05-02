import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Comment from '../components/Comments';
import { addCommentToBook, removeCommentFromBook, toggleModal } from '../actions/index';
import '../assets/css/modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { addCommentToBook, modal } = this.props;
    const { selectedObject } = modal;
    const { comment } = this.state;
    e.preventDefault();
    addCommentToBook(selectedObject, comment);
    this.reset();
  }

  reset() {
    this.setState({
      comment: '',
    });
  }

  render() {
    const { modal, removeCommentFromBook, toggleModal } = this.props;
    const { selectedObject } = modal;
    const { comments } = selectedObject;
    let renderMain;
    if (modal.type === 'comments' && modal.showModal) {
      renderMain = (
        <div className="modal">
          <div className="modalContent">
            <header>
              <button
                type="button"
                className="modalClose"
                onClick={() => toggleModal('comments', selectedObject)}
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
            <footer className="comment-form">
              <input
                name="comment"
                type="text"
                placeholder="type comment here..."
                minLength="3"
                maxLength="450"
                onChange={this.handleChange}
              />
              <button type="button" onClick={this.handleSubmit}> Comment </button>
            </footer>
          </div>
        </div>
      );
    }
    return modal.showModal ? renderMain : null;
  }
}

Modal.propTypes = {
  modal: PropTypes.instanceOf(Object).isRequired,
  addCommentToBook: PropTypes.func.isRequired,
  removeCommentFromBook: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  removeCommentFromBook: (book, comment) => {
    dispatch(removeCommentFromBook(book, comment));
  },
  addCommentToBook: (book, comment) => {
    dispatch(addCommentToBook(book, comment));
  },
  toggleModal: (modalType, selectedObject) => {
    dispatch(toggleModal(modalType, selectedObject));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
