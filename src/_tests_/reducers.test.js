import { MOVIES } from './mockData';
import moviesReducer from '../Reducers/movies';
import movieReducer from '../Reducers/movie';
import filterReducer from '../Reducers/filter';
import titleReducer from '../Reducers/title';
import userReducer from '../Reducers/user';
import {
  changeMovies,
  changeMovie,
  changeFilter,
  changeTitle,
  changeUser,
} from '../Actions/index';

describe('Movies Reducer', () => {
  it('It should return the payload', () => {
    const movie = MOVIES;
    expect(moviesReducer(undefined, changeMovies(movie))).toStrictEqual(MOVIES);
  });

  it('It should not return an empty payload', () => {
    const movie = null;
    expect(moviesReducer(undefined, changeMovies(movie))).not.toBeNull();
  });

  it('It should return the initial state', () => {
    const movie = null;
    expect(moviesReducer(undefined, changeMovies(movie))).toStrictEqual([]);
  });
});

describe('Movie Data Reducer', () => {
  it('It should return the payload', () => {
    const movie = MOVIES[0];
    expect(movieReducer(undefined, changeMovie(movie)))
      .toStrictEqual(MOVIES[0]);
  });

  it('It should not return an empty payload', () => {
    const movie = null;
    expect(movieReducer(undefined, changeMovie(movie))).not.toBeNull();
  });

  it('It should return the initial state', () => {
    const movie = null;
    expect(movieReducer(undefined, changeMovie(movie))).toStrictEqual({});
  });
});

describe('Filter Reducer', () => {
  it('It should return the payload', () => {
    const filter = 'Action';
    expect(filterReducer(undefined, changeFilter(filter))).toBe('Action');
  });

  it('It should not return an empty payload', () => {
    const filter = null;
    expect(filterReducer(undefined, changeFilter(filter))).not.toBeNull();
  });

  it('It should return the initial state', () => {
    const filter = null;
    expect(filterReducer(undefined, changeFilter(filter))).toBe('All');
  });
});

describe('Title Reducer', () => {
  it('It should return the payload', () => {
    const title = 'Iron Man';
    expect(titleReducer(undefined, changeTitle(title))).toBe('Iron Man');
  });

  it('It should not return an empty payload', () => {
    const title = null;
    expect(titleReducer(undefined, changeTitle(title))).not.toBeNull();
  });

  it('It should return the initial state', () => {
    const title = null;
    expect(titleReducer(undefined, changeTitle(title))).toBe('');
  });
});

describe('User Reducer', () => {
  it('It should return the payload', () => {
    const user = 'Name';
    expect(userReducer(undefined, changeUser(user))).toBe('Name');
  });

  it('It should return an empty payload', () => {
    const user = null;
    expect(userReducer(undefined, changeUser(user))).toBeNull();
  });
});
