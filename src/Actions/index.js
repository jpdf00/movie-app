import axios from 'axios';

const CHANGE_MOVIES = 'CHANGE_MOVIES';
const CHANGE_MOVIE = 'CHANGE_MOVIE';
const CHANGE_FAVOURITE = 'CHANGE_FAVOURITE';
const CHANGE_FILTER = 'CHANGE_FILTER';
const CHANGE_TITLE = 'CHANGE_TITLE';
const LOG_IN = 'LOG_IN';

const changeMovies = (url) => async (dispatch) => {
  dispatch({ type: CHANGE_MOVIES });

  try {
    const res = await axios.get(`${url}`);

    dispatch({
      type: CHANGE_MOVIES,
      payload: {
        list: res.data,
        loading: false,
        error: false,
      },
    });
  } catch (error) {
    dispatch({
      type: CHANGE_MOVIES,
      payload: {
        list: [],
        loading: false,
        error: true,
      },
    });
  }
};

const changeMovie = (url) => async (dispatch) => {
  dispatch({ type: CHANGE_MOVIE });

  try {
    const res = await axios.get(`${url}`);

    dispatch({
      type: CHANGE_MOVIE,
      payload: {
        item: res.data,
        loading: false,
        error: false,
      },
    });
  } catch (error) {
    dispatch({
      type: CHANGE_MOVIE,
      payload: {
        item: {},
        loading: false,
        error: true,
      },
    });
  }
};

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const changeTitle = (title) => ({
  type: CHANGE_TITLE,
  payload: title,
});

const changeUser = (user) => ({
  type: LOG_IN,
  payload: user,
});

const changeFavourite = (favourite) => ({
  type: CHANGE_FAVOURITE,
  payload: favourite,
});

const postFavourite = (url) => async (dispatch) => {
  try {
    const res = await axios.post(`${url}`);

    dispatch({
      type: CHANGE_FAVOURITE,
      payload: res.data.id.toString(),
    });
  } catch (error) {
    dispatch({
      type: CHANGE_FAVOURITE,
      payload: 0,
    });
  }
};

const deleteFavourite = (url) => async (dispatch) => {
  try {
    await axios.delete(`${url}`);

    dispatch({
      type: CHANGE_FAVOURITE,
      payload: 0,
    });
  } catch (error) {
    dispatch({
      type: CHANGE_FAVOURITE,
      payload: 0,
    });
  }
};

export {
  CHANGE_MOVIES,
  CHANGE_MOVIE,
  CHANGE_FILTER,
  CHANGE_TITLE,
  CHANGE_FAVOURITE,
  LOG_IN,
  changeMovies,
  changeMovie,
  changeFilter,
  changeTitle,
  changeFavourite,
  postFavourite,
  deleteFavourite,
  changeUser,
};
