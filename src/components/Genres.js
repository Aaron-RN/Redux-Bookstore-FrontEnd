import React from 'react';
import PropTypes from 'prop-types';

const Genres = ({ genre, removeGenreFromDB }) => (
  <div className="genre">
    <div className="comment-body">
      {genre.name}
    </div>
    <button type="button" onClick={() => removeGenreFromDB(genre)}>Remove</button>
  </div>
);

Genres.propTypes = {
  genre: PropTypes.instanceOf(Object).isRequired,
  removeGenreFromDB: PropTypes.func.isRequired,
};

export default Genres;
