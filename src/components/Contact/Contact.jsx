import css from './Contact.module.css';
import PropTypes from 'prop-types';

export default function Contact({ contact }) {
  const { id, name, number } = contact;

  return (
    <li className={css.contact} key={id}>
      <p className={css.name}>{name}</p>
      <p className={css.number}>{number}</p>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
