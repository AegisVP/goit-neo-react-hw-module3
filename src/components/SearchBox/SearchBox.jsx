import css from './SearchBox.module.css';
import PropTypes from 'prop-types';
import { useId } from 'react';

export default function SearchBox({ searchValue, onSearch }) {
  const searchId = useId();
  return (
    <div className={css.box}>
      <label className={css.label} htmlFor={searchId}>
        Find contacts by name:
      </label>
      <input id={searchId} type="text" className={css.input} onChange={e => onSearch(e.target.value)} value={searchValue} />
    </div>
  );
}

SearchBox.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};