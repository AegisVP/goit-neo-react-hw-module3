import css from './App.module.css';
import baseContactList from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useEffect, useState } from 'react';

const localStorageKey = 'contacts';

export default function App() {
  const [contactList, setContactList] = useState(() => readContacts());

  function resetContacts() {
    setContactList(baseContactList);
    saveContacts(baseContactList);
  }

  function readContacts() {
    let localContacts = JSON.parse(localStorage.getItem(localStorageKey));

    if (!localContacts) {
      localContacts = baseContactList;
    }

    return localContacts;
  }

  function saveContacts(contacts) {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }

  const onDelete = id => {
    const newContactList = contactList.filter(contact => contact.id !== id);
    setContactList(newContactList);
    saveContacts(newContactList);
  };

  useEffect(() => {
    saveContacts(contactList);
  }, [contactList]);

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <div className={css.card}>
        <ContactForm />
      </div>
      <div className={css.card}>
        <SearchBox />
      </div>
      <div className={css.list}>
        <ContactList contactList={contactList} onDelete={onDelete} onReset={resetContacts} />
      </div>
    </div>
  );
}
