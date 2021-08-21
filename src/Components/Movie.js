import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import '../Assets/Stylesheets/Earth.css';

const Movie = (props) => {
  const { movie, filter } = props;

  return (
    <Link to="\">
      <div className="card">
        <h3 className="topTitle">{movie.title}</h3>

        <p className="topText">
          {
            `Total ${filter}:
            ${movie.year}`
          }
        </p>
      </div>
    </Link>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    ID: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  }).isRequired,
  filter: PropTypes.string.isRequired,
};

export default Movie;
