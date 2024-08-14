import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

export default function ContactList({ contactList, onDelete, onReset }) {
  return contactList.length > 0 ? (
    <ul className={css.list}>
      {contactList.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  ) : (
    <>
      <p>There are no contacts</p>
      <button className={css.btn} onClick={() => onReset()}>
        Reset default
      </button>
    </>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
