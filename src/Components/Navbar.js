import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeTitle, changeUser } from '../Actions/index';
import Filter from '../Containers/Filter';
import '../Assets/Stylesheets/Navbar.css';

const Navbar = () => {
  const page = useSelector((state) => state.title);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const capitalize = (word) => (
    word[0].toUpperCase() + word.slice(1).toLowerCase()
  );

  const handleClick = (title) => {
    toggleMenu();
    if (title === 'Login') {
      dispatch(changeUser(''));
    }
    dispatch(changeTitle(capitalize(title)));
  };

  return (
    <nav className="navbar">
      {showMenu && (
        <div className="navbar__menu">
          <Link to="/list/movies" onClick={() => handleClick('Movies')} className="navbar__menu__item">Movies</Link>
          <Link to="/list/favourites" onClick={() => handleClick('Favourites')} className="navbar__menu__item">Favourites</Link>
          <Link to="/" onClick={() => handleClick('Login')} className="navbar__menu__item">Sign Out</Link>
        </div>
      )}
      <i className="fas fa-bars navbar__icon" onClick={toggleMenu} onKeyPress={toggleMenu} role="menu" tabIndex={0} />
      <h1 className="navbar__title">{page}</h1>
      <Filter />
    </nav>
  );
};

export default Navbar;
