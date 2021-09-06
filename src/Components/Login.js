import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Assets/Stylesheets/Login.css';

const Login = (props) => {
  const { user, handleSubmit } = props;
  const [username, setUsername] = useState(user);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <form onSubmit={() => handleSubmit(username)} className="form">
      <p className="form__label">To access the site enter your name below:</p>
      <label htmlFor="username">
        <input className="form__input" type="text" name="username" value={username} id="username" placeholder="Enter name here..." onChange={handleChange} />
      </label>
      <button className="form__button" type="submit" name="button">Enter</button>
    </form>
  );
};

Login.propTypes = {
  user: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Login;
