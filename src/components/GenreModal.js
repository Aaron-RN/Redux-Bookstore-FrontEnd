import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Error from './Errors';
import Genre from './Genres';

const GenreModal = ({
  grabChildrenRefs, handleChange, handleSubmit, clearErrors,
  removeGenreFromDB, toggleModal, genres, errors,
}) => {
  const genreInput = React.useRef(null);

  useEffect(() => {
    grabChildrenRefs(genreInput);
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
          <h2>Genres</h2>
          {genres.map(genre => (
            <Genre
              genre={genre}
              key={genre.id + genre.name}
              removeGenreFromDB={removeGenreFromDB}
            />
          ))}
        </main>
        <footer className="genre-form">
          <Error errors={errors} />
          <input
            ref={genreInput}
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
  grabChildrenRefs: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  removeGenreFromDB: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

export default GenreModal;
