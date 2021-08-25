import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Assets/Stylesheets/Movie.css';

const Movie = (props) => {
  const { movie, filter } = props; // eslint-disable-line
  const d = new Date(movie.year);

  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="movie">
        <img className="movie__poster" src={movie.poster} alt="Movie Poster" />

        <div className="movie__details">
          <div className="movie__details__row">
            <h3 className="movie__details__row__title">{movie.title}</h3>
            <h3 className="movie__details__row__year">{d.getUTCFullYear()}</h3>
          </div>
          <div className="movie__details__row">
            <div className="movie__details__row__stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p className="movie__details__row__runtime">{`${movie.runtime} min`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
  }).isRequired,
  filter: PropTypes.string.isRequired,
};

export default Movie;
