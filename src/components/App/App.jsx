import css from './App.module.css';
import baseContactList from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useEffect, useState } from 'react';

const localStorageKey = 'contacts';

export default function App() {
  const [contactList, setContactList] = useState(() => readContacts());
  const [searchValue, setSearchValue] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contactList);

  function resetContacts() {
    setSearchValue('');

    if (contactList.length > 0) {
      setFilteredContacts(contactList);
      return;
    }

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

  function onDelete(id) {
    const newContactList = contactList.filter(contact => contact.id !== id);
    setContactList(newContactList);
    saveContacts(newContactList);
  }

  useEffect(() => {
    saveContacts(contactList);
  }, [contactList]);

  useEffect(() => {
    setFilteredContacts(contactList.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase())));
  }, [searchValue, contactList]);

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <div className={css.card}>
        <ContactForm />
      </div>
      <div className={css.card}>
        <SearchBox searchValue={searchValue} onSearch={setSearchValue} />
      </div>
      <div className={css.list}>
        <ContactList contactList={filteredContacts} onDelete={onDelete} onReset={resetContacts} />
      </div>
    </div>
  );
}
