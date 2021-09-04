import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MOVIES } from './mockData';
import Login from '../Components/Login';
import Navbar from '../Components/Navbar';
import Movie from '../Components/Movie';
import NotFound from '../Components/NotFound';
import Filter from '../Containers/Filter';
import MoviesList from '../Containers/MoviesList';
import Details from '../Containers/Details';

const initialState = {
  movies: MOVIES,
  movie: MOVIES[0],
  filter: 'All',
  title: 'Movies',
  user: '',
};

const mockFunc = () => true;

const mockStore = configureStore([]);

describe('Login', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(initialState);

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Login user="user" handleSubmit={mockFunc} />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('Should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('Navbar', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(initialState);

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    );
  });

  it('Should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('Movie', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(initialState);

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Movie movie={MOVIES[0]} />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('Should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('Not Found', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(initialState);

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('Should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('Filter', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(initialState);

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <Filter handlechange={mockFunc} />
      </Provider>,
    );
  });

  it('Should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('Movies', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(initialState);

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <MoviesList path="/list/movies" />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('Should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('Details', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(initialState);

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Details path="/movies/3" />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('Should render', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
