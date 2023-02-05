import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete, filter }) => {
  const filteredContacts =
    filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <>
      <h2 className={css.contacts__title}>Contacts</h2>
      <div className={css.contacts}>
        <ul className={css.contacts__list}>
          {filteredContacts.map(contact => (
            <li className={css.contacts__item} key={contact.name}>
              <p className={css.contacts__name}>{contact.name}</p>
              <p className={css.contacts__number}>{contact.number}</p>
              <button
                className={css.contacts__btn}
                type="button"
                onClick={() => handleDelete(contact.name)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
