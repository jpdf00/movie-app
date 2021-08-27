import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changeMovies } from '../Actions/index';
import Movie from '../Components/Movie';
import getData from '../Fetch/asyncFetch';
import '../Assets/Stylesheets/Container.css';

const MoviesList = () => {
  const filter = useSelector((state) => state.filter);
  const movies = useSelector((state) => state.movies);
  const title = useSelector((state) => state.title);
  const filteredMovies = movies.filter((movie) => movie.genre === filter || filter === 'All');
  const { page } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const url = `https://movies-api-jpdf00.herokuapp.com/${page}`;
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
        dispatch(changeMovies(resp));
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [title]);

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
      {filteredMovies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default MoviesList;
