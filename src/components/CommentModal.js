import React from 'react';
import PropTypes from 'prop-types';
import Error from './Errors';
import Comment from './Comments';

const CommentModal = ({
  handleChange, handleSubmit, removeCommentFromBook, toggleModal, book, comments, errors,
}) => {
  const commentForm = React.useRef(null);

  return (
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
          <h2>{book.title}</h2>
          {comments.map(comment => (
            <Comment
              book={book}
              comment={comment}
              key={comment.id + book.title}
              removeCommentFromBook={removeCommentFromBook}
            />
          ))}
        </main>
        <footer ref={commentForm} className="comment-form">
          <Error errors={errors} />
          <input
            name="comment"
            type="text"
            placeholder="type comment here..."
            minLength="3"
            maxLength="450"
            onChange={handleChange}
          />
          <button name="comment" type="button" onClick={handleSubmit}> Comment </button>
        </footer>
      </div>
    </div>
  );
};

CommentModal.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    comments: PropTypes.instanceOf(Array),
  }).isRequired,
  comments: PropTypes.instanceOf(Array).isRequired,
  errors: PropTypes.instanceOf(Array).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  removeCommentFromBook: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default CommentModal;
