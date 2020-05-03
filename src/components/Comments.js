import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ book, comment, removeCommentFromBook }) => {
  const date = new Date(comment.created_at);
  return (
    <div className="comment">
      <div className="date">
        {date.toString().slice(0, 15)}
        ...
      </div>
      <div className="comment-body">
        {comment.body}
      </div>
      <button type="button" onClick={() => removeCommentFromBook(book, comment)}>Remove</button>
    </div>
  );
};

Comments.defaultProps = {
  comment: {},
};

Comments.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    comments: PropTypes.instanceOf(Array),
  }).isRequired,
  comment: PropTypes.instanceOf(Object),
  removeCommentFromBook: PropTypes.func.isRequired,
};

export default Comments;
