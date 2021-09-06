import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './Components/App';
import rootReducer from './Reducers/index';

const initialState = {
  movies: {
    list: [],
    loading: true,
    error: false,
  },
  movie: {
    item: {},
    loading: true,
    error: false,
  },
  favourite: '',
  filter: 'All',
  title: 'Movies',
  user: '',
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
