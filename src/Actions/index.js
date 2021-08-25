const CHANGE_MOVIE = 'CHANGE_MOVIE';
const CHANGE_FILTER = 'CHANGE_FILTER';
const CHANGE_TITLE = 'CHANGE_TITLE';

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
  CHANGE_MOVIE,
  CHANGE_FILTER,
  CHANGE_TITLE,
  changeMovie,
  changeFilter,
  changeTitle,
};
