import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  changeMovies,
  changeMovie,
  changeTitle,
  changeFavourite,
  postFavourite,
  deleteFavourite,
} from '../Actions/index';
import '../Assets/Stylesheets/Details.css';

const Details = () => {
  const movies = useSelector((state) => state.movies);
  const title = useSelector((state) => state.title);
  const { item, loading, error } = useSelector((state) => state.movie);
  const favourite = useSelector((state) => state.favourite);
  const dispatch = useDispatch();
  const { id } = useParams();
  const urlGETMovie = `https://movies-api-jpdf00.herokuapp.com/movies/${id}`;
  const urlGETMovies = 'https://movies-api-jpdf00.herokuapp.com/movies';
  const urlPOST = `https://movies-api-jpdf00.herokuapp.com/favourites?user_id=1&movie_id=${id}`;
  const urlDELETE = `https://movies-api-jpdf00.herokuapp.com/favourites/${favourite}`;

  const getMovie = (movies, id) => {
    let index = 0;
    if (movies[index]) {
      index = movies.findIndex((movie) => (movie.id.toString() === id));
      if (movies[index].favourites[0]) {
        return movies[index].favourites[0].id;
      }
    }
    return '';
  };

  useEffect(() => {
    dispatch(changeTitle(item.title));
  }, [item]);

  useEffect(() => {
    dispatch(changeFavourite(getMovie(movies.list, id)));
  }, [title]);

  useEffect(() => {
    dispatch(changeMovies(urlGETMovies));
  }, []);

  useEffect(() => {
    dispatch(changeMovie(urlGETMovie));
  }, []);

  const handleClick = () => {
    if (favourite) {
      dispatch(deleteFavourite(urlDELETE));
    } else {
      dispatch(postFavourite(urlPOST));
    }
  };

  if (loading) {
    return (
      <aside className="processing">
        Processing
      </aside>
    );
  }

  if (error) {
    return (
      <aside className="notfound" />
    );
  }

  const d = new Date(item.year);
  return (
    <section className="detail">
      <img className="detail__poster" src={item.poster} alt="Movie Poster" />

      <aside className="detail__info">
        <div className="movie__details__row">
          <div className="movie__details__row">
            <img className="movie__details__row__photo" src="" alt="" style={{ backgroundImage: `url(${item.photo})` }} />
            <h3 className="movie__details__row__title">{item.director}</h3>
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
          <p className="movie__details__row__runtime">{`${item.runtime} min`}</p>
        </div>
      </aside>
      <article className="detail__plot">
        <h3 className="detail__plot__title">About this Movie:</h3>
        {item.plot}
      </article>
      <div className="detail__button" onClick={() => (handleClick())} onKeyPress={() => (handleClick())} role="menu" tabIndex={0}>
        {favourite ? 'REMOVE FROM FAVOURITES' : 'ADD TO FAVOURITES'}
      </div>
    </section>
  );
};

export default Details;
