import React from 'react';
import PropTypes from 'prop-types';
import s from './filter.module.css';

export default function Filter({ filter, onChange }) {
  return (
    <div>
      <p className={s.search}>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
