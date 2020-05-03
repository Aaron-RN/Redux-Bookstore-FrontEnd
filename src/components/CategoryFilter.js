import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/CategoryFilter.css';

const CategoryFilter = ({
  changeFilter, genres,
}) => {
  const selectCat = React.useRef(null);
  const allGenres = [
    { id: 9999, name: 'All' }, ...genres,
  ];

  return (
    <div>
      <select ref={selectCat} name="category" placeholder="Category" onChange={() => changeFilter(selectCat.current.value)}>
        {allGenres.map(genre => (
          <option key={genre.id + genre.name}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  genres: PropTypes.instanceOf(Array).isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
