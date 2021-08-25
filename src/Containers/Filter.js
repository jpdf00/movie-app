import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../Actions/index';
import '../Assets/Stylesheets/Filter.css';

const CATEGORIES = ['All', 'Action', 'Biography', 'Fantasy', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const Filter = (props) => {
  const { handlechange } = props;
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    handlechange();
    const data = e.target.value;
    dispatch(changeFilter(data));
  };

  return (
    <select name="filter" className="filter" value={filter} onChange={handleFilterChange}>
      {CATEGORIES.map((category) => (
        <option key={uuidv4()} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

Filter.propTypes = {
  handlechange: PropTypes.func.isRequired,
};

export default Filter;
