const CHANGE_MOVIES = 'CHANGE_MOVIES';
const CHANGE_MOVIE = 'CHANGE_MOVIE';
const CHANGE_FILTER = 'CHANGE_FILTER';
const CHANGE_TITLE = 'CHANGE_TITLE';

const changeMovies = (movies) => ({
  type: CHANGE_MOVIES,
  payload: movies,
});

const changeMovie = (movie) => ({
  type: CHANGE_MOVIE,
  payload: movie,
});

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const changeTitle = (title) => ({
  type: CHANGE_TITLE,
  payload: title,
});

export {
  CHANGE_MOVIES,
  CHANGE_MOVIE,
  CHANGE_FILTER,
  CHANGE_TITLE,
  changeMovies,
  changeMovie,
  changeFilter,
  changeTitle,
};
