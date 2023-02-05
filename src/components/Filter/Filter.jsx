import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ filter, setFilter }) => (
  <div className={css.filter}>
    <input
      className={css.filter__input}
      value={filter}
      onChange={event => setFilter(event.target.value)}
    />
  </div>
);
