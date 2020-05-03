import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Error from './Errors';
import Comment from './Comments';

const CommentModal = ({
  grabChildrenRefs, handleChange, handleSubmit, clearErrors,
  removeCommentFromBook, toggleModal, book, comments, errors,
}) => {
  const commentInput = React.useRef(null);

  useEffect(() => {
    grabChildrenRefs(commentInput);
  });

  return (
    <div className="modal">
      <div className="modalContent">
        <header>
          <button
            type="button"
            className="modalClose"
            onClick={() => {
              clearErrors();
              toggleModal('comments', {});
            }}
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
        <footer className="comment-form">
          <Error errors={errors} />
          <input
            ref={commentInput}
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
  grabChildrenRefs: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  removeCommentFromBook: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

export default CommentModal;
