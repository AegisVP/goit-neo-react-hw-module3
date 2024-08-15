import css from './Contact.module.css';
import PropTypes from 'prop-types';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function Contact({ contact, onDelete }) {
  const { id, name, number } = contact;

  return (
    <IconContext.Provider value={{ style: { margin: '0 10px 0 0' } }}>
      <li className={css.contact} key={id}>
        <div className={css.data}>
          <p className={css.name}>
            <FaUser />
            {name}
          </p>
          <p className={css.number}>
            <FaPhoneAlt />
            {number}
          </p>
        </div>
        <button className={css.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    </IconContext.Provider>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
