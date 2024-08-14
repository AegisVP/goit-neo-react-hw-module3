import css from './App.module.css';
import baseContactList from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const localStorageKey = 'contacts';

export default function App() {
  const [contactList, setContactList] = useState(() => readContacts());
  const [searchValue, setSearchValue] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contactList);

  function resetContacts() {
    setSearchValue('');

    if (contactList.length > 0) {
      return;
    }

    setContactList(baseContactList);
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

  function onAddContact({ name, number }) {
    if (contactList.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      toast.error(`"${name}" is already in contacts`);
      return;
    }

    setContactList([...contactList, { id: Date.now().toString(), name, number }]);
  }

  function onDeleteContact(id) {
    const newContactList = contactList.filter(contact => contact.id !== id);
    setContactList(newContactList);
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
        <ContactForm onSubmit={onAddContact} />
      </div>
      <div className={css.card}>
        <SearchBox searchValue={searchValue} onSearch={setSearchValue} />
      </div>
      <div className={css.list}>
        <ContactList contactList={filteredContacts} onDelete={onDeleteContact} onReset={resetContacts} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
