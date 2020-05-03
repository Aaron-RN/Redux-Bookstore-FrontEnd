import React from 'react';
import PropTypes from 'prop-types';
import Error from './Errors';
import Genre from './Genres';

const GenreModal = ({
  handleChange, handleSubmit, removeGenreFromDB, toggleModal, genres, errors,
}) => {
  const genreForm = React.useRef(null);

  return (
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
        <footer ref={genreForm} className="genre-form">
          <Error errors={errors} />
          <input
            name="genre"
            type="text"
            placeholder="type genre here..."
            minLength="3"
            maxLength="30"
            onChange={handleChange}
          />
          <button name="genre" type="button" onClick={handleSubmit}> Add Genre </button>
        </footer>
      </div>
    </div>
  );
};

GenreModal.propTypes = {
  genres: PropTypes.instanceOf(Array).isRequired,
  errors: PropTypes.instanceOf(Array).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  removeGenreFromDB: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default GenreModal;
