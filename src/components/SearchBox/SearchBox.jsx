import css from './SearchBox.module.css';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function SearchBox({ searchValue, onSearch }) {
  return (
    <IconContext.Provider value={{ className: css.icon }}>
      <div className={css.box}>
        <label className={css.label}>
          Find contacts by name:
          <input type="text" className={css.input} onChange={e => onSearch(e.target.value)} value={searchValue} />
          <FaUser />
        </label>
      </div>
    </IconContext.Provider>
  );
}

SearchBox.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
