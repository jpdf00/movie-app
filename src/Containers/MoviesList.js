import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Movie from '../Components/Movie';
import { changeTitle, changeMovies } from '../Actions/index';
import '../Assets/Stylesheets/Container.css';

const MoviesList = () => {
  const filter = useSelector((state) => state.filter);
  const title = useSelector((state) => state.title);
  const { list, loading, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const filteredMovies = list.filter((movie) => movie.genre === filter || filter === 'All');
  const { page } = useParams();
  const url = `https://movies-api-jpdf00.herokuapp.com/${page}`;

  useEffect(() => {
    dispatch(changeMovies(url));
  }, [title]);

  useEffect(() => {
    dispatch(changeTitle(page));
  }, []);

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

  return (
    <section className="container">
      {filteredMovies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
        />
      ))}
    </section>
  );
};

export default MoviesList;
