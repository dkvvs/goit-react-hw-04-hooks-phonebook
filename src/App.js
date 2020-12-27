import { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import useLocalStorage from './hooks/useLocalStorage';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contacts', INITIAL_STATE);

  const handleAddNewContact = nameContact => {
    setContacts([...contacts, nameContact]);
  };

  const handleCheckContact = name => {
    const isExistContact = !!contacts.find(
      contact => contact.name.trim() === name.trim(),
    );
    if (isExistContact) {
      alert('Контакт с таким именем уже существует!');
    }
    return !isExistContact;
  };

  const handleRemoveContact = id =>
    setContacts(contacts.filter(contact => contact.id !== id));

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const getVisibleContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const visibleContacts = getVisibleContact();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        onAddContact={handleAddNewContact}
        onCheckContact={handleCheckContact}
      />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilter} />
      <ContactList contacts={visibleContacts} onRemove={handleRemoveContact} />
    </>
  );
}
