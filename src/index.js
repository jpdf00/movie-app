import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App';
import rootReducer from './Reducers/index';

const initialState = {
  movies: [],
  movie: {},
  filter: 'All',
  title: 'Movies',
  user: '',
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
