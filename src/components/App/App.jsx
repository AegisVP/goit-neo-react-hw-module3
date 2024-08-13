import css from './App.module.css';
import contactList from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

export default function App() {
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <div className={css.card}>
        <ContactForm />
      </div>
      <div className={css.card}>
        <SearchBox />
      </div>
      <div className={css.card}>
        <ContactList contactList={contactList} />
      </div>
    </div>
  );
}
