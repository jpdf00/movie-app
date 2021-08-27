import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { changeUser } from '../Actions/index';
import Navbar from './Navbar';
import Routes from './Routes';
import Login from './Login';
import '../Assets/Stylesheets/Main.css';

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (username) => {
    dispatch(changeUser(username));
  };

  return (
    <main>
      <BrowserRouter>
        <Navbar />
        {user ? <Routes /> : <Login user={user} handleSubmit={handleSubmit} />}
      </BrowserRouter>
    </main>
  );
};

export default App;
