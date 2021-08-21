const CHANGE_MOVIE = 'CHANGE_MOVIE';
const CHANGE_FILTER = 'CHANGE_FILTER';
const CHANGE_FAVOURITE = 'CHANGE_FAVOURITE';

const changeMovie = (movie) => ({
  type: CHANGE_MOVIE,
  payload: movie,
});

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const changeFavourite = (favourite) => ({
  type: CHANGE_FAVOURITE,
  payload: favourite,
});

export {
  changeMovie,
  changeFilter,
  changeFavourite,
  CHANGE_MOVIE,
  CHANGE_FILTER,
  CHANGE_FAVOURITE,
};
