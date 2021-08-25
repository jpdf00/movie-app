import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMovie } from '../Actions/index';
import Movie from '../Components/Movie';
import getData from '../Fetch/asyncFetch';
import '../Assets/Stylesheets/Container.css';

const MoviesList = () => {
  const filter = useSelector((state) => state.filter);
  const movies = useSelector((state) => state.movie);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const url = 'https://movies-api-jpdf00.herokuapp.com/movies';
  const options = {
    method: 'GET',
    mode: 'cors',
  };

  useEffect(() => {
    getData(url, options)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw resp;
      })
      .then((resp) => {
        dispatch(changeMovie(resp));
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
    <div className="container">
      {movies.map((movie) => (
        <Movie
          key={movie.ID}
          movie={movie}
          filter={filter}
        />
      ))}
    </div>
  );
};

export default MoviesList;
