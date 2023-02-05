import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [newContactName, setNewContactName] = useState('');
  const [newContactPhone, setNewContactPhone] = useState('');
  const [newContactId, setNewContactId] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = event => {
    event.preventDefault();
    if (!contacts.find(contact => contact.name === newContactName)) {
      setContacts([
        ...contacts,
        { id: nanoid(), name: newContactName, number: newContactPhone },
      ]);
      setNewContactName('');
      setNewContactPhone('');
      setNewContactId('');
    }
  };

  const handleDelete = name => {
    setContacts(contacts.filter(contact => contact.name !== name));
  };

  return (
    <div>
      <ContactForm
        handleSubmit={handleSubmit}
        newContactName={newContactName}
        setNewContactName={setNewContactName}
        newContactPhone={newContactPhone}
        setNewContactPhone={setNewContactPhone}
        newContactId={newContactId}
        setNewContactId={setNewContactId}
      />
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={contacts}
        handleDelete={handleDelete}
        filter={filter}
      />
    </div>
  );
};
