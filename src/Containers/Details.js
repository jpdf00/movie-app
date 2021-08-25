import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changeTitle } from '../Actions/index';
import '../Assets/Stylesheets/Details.css';

const Details = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { id } = useParams();

  const getMovie = (movies, id) => {
    const index = movies.findIndex((movie) => (movie.id.toString() === id));
    return movies[index];
  };

  const movie = getMovie(movies, id);
  const d = new Date(movie.year);

  useEffect(() => {
    dispatch(changeTitle(movie.title));
  }, []);

  return (
    <div className="detail">
      <img className="detail__poster" src={movie.poster} alt="Movie Poster" />

      <div className="detail__info">
        <div className="movie__details__row">
          <div className="movie__details__row">
            <img className="movie__details__row__photo" src="" alt="" />
            <h3 className="movie__details__row__title">{movie.director}</h3>
          </div>
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
      <div className="detail__plot">
        <h3>About this Movie:</h3>
        {movie.plot}
      </div>
      <div className="movie__details">
        ADD TO FAVOURITES
      </div>
    </div>
  );
};

export default Details;
