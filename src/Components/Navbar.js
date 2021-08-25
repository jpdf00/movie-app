import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeTitle } from '../Actions/index';
import Filter from '../Containers/Filter';
import '../Assets/Stylesheets/Navbar.css';

const Navbar = () => {
  const page = useSelector((state) => state.title);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const capitalize = (word) => (
    word[0].toUpperCase() + word.slice(1).toLowerCase()
  );

  const handleClick = (title) => {
    toggleMenu();
    dispatch(changeTitle(capitalize(title)));
  };

  return (
    <div className="navbar">
      {showMenu && (
        <div className="navbar__menu">
          <Link to="/list/movies" onClick={() => handleClick('Movies')} className="navbar__menu__item">Movies</Link>
          <Link to="/list/favourites" onClick={() => handleClick('Favourites')} className="navbar__menu__item">Favourites</Link>
          <Link to="/" onClick={() => handleClick('Login')} className="navbar__menu__item">Sign Out</Link>
        </div>
      )}
      <i className="fas fa-bars" onClick={toggleMenu} onKeyPress={toggleMenu} role="menu" tabIndex={0} />
      <h1 className="title">{page}</h1>
      <i className="fas fa-search" onClick={toggleFilter} onKeyPress={toggleFilter} role="menu" tabIndex={0} />
      {showFilter && (
        <Filter handlechange={toggleFilter} />
      )}
    </div>
  );
};

export default Navbar;
