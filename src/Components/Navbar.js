import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../Containers/Filter';
import '../Assets/Stylesheets/Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  function toggleFilter() {
    setShowFilter(!showFilter);
  }

  return (
    <div className="navbar">
      {showMenu && (
        <div className="navbar__menu">
          <Link to="/movies" onClick={toggleMenu}>Movies</Link>
          <Link to="/favourites" onClick={toggleMenu}>Favourites</Link>
          <Link to="/" onClick={toggleMenu}>Sign Out</Link>
        </div>
      )}
      <i className="fas fa-bars" onClick={toggleMenu} onKeyPress={toggleMenu} role="menu" tabIndex={0} />
      <h1 className="title">Movies</h1>
      <i className="fas fa-search" onClick={toggleFilter} onKeyPress={toggleFilter} role="menu" tabIndex={0} />
      {showFilter && (
        <Filter handlechange={toggleFilter} />
      )}
    </div>
  );
};

export default Navbar;
