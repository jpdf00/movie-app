import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changeTitle, changeMovie, changeMovies } from '../Actions/index';
import getData from '../Fetch/asyncFetch';
import '../Assets/Stylesheets/Details.css';

const Details = () => {
  const movies = useSelector((state) => state.movies);
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [favourite, setFavourite] = useState(0);
  const urlGETMovie = `https://movies-api-jpdf00.herokuapp.com/movies/${id}`;
  const urlGETMovies = 'https://movies-api-jpdf00.herokuapp.com/movies';
  const urlPOST = `https://movies-api-jpdf00.herokuapp.com/favourites?user_id=1&movie_id=${id}`;
  const urlDELETE = `https://movies-api-jpdf00.herokuapp.com/favourites/${favourite}`;
  const optionsGET = {
    method: 'GET',
    mode: 'cors',
  };
  const optionsPOST = {
    method: 'POST',
    mode: 'cors',
  };
  const optionsDELETE = {
    method: 'DELETE',
    mode: 'cors',
  };

  const getMovie = (movies, id) => {
    let index = 0;
    if (movies[index]) {
      index = movies.findIndex((movie) => (movie.id.toString() === id));
      if (movies[index].favourites[0]) {
        return movies[index].favourites[0].id;
      }
    }
    return 0;
  };

  useEffect(() => {
    dispatch(changeTitle(movie.title));
  }, []);

  useEffect(() => {
    setFavourite(getMovie(movies, id));
  }, [movies]);

  useEffect(() => {
    getData(urlGETMovie, optionsGET)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw resp;
      })
      .then((resp) => {
        dispatch(changeTitle(resp.title));
        dispatch(changeMovie(resp));
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });

    getData(urlGETMovies, optionsGET)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw resp;
      })
      .then((resp) => {
        dispatch(changeMovies(resp));
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const d = new Date(movie.year);

  const handleClick = () => {
    if (favourite) {
      getData(urlDELETE, optionsDELETE)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          throw resp;
        })
        .catch(() => {
          setFavourite(0);
        });
    } else {
      getData(urlPOST, optionsPOST)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          throw resp;
        })
        .then((resp) => {
          setFavourite(resp.id);
        });
    }
  };

  if (loading) {
    return (
      <div className="processing">
        Processing
      </div>
    );
  }

  if (error) {
    return (
      <div className="NotFound" />
    );
  }

  return (
    <div className="detail">
      <img className="detail__poster" src={movie.poster} alt="Movie Poster" />

      <div className="detail__info">
        <div className="movie__details__row">
          <div className="movie__details__row">
            <img className="movie__details__row__photo" src="" alt="" style={{ backgroundImage: `url(${movie.photo})` }} />
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
        <h3 className="detail__plot__title">About this Movie:</h3>
        {movie.plot}
      </div>
      <div className="detail__button" onClick={() => (handleClick())} onKeyPress={() => (handleClick())} role="menu" tabIndex={0}>
        {favourite ? 'REMOVE FROM FAVOURITES' : 'ADD TO FAVOURITES'}
      </div>
    </div>
  );
};

export default Details;
