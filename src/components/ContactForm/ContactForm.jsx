import React from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({
  handleSubmit,
  newContactName,
  setNewContactName,
  newContactPhone,
  setNewContactPhone,
}) => (
  <form className={css.form} onSubmit={handleSubmit}>
    <h2 className={css.form__title}>Phonebook</h2>
    <div className={css.form__container}>
      <p className={css.form__label}>name: </p>
      <input
        className={css.form__input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name  may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
        required
        value={newContactName}
        onChange={event => setNewContactName(event.target.value)}
      />
    </div>
    <div>
      <p className={css.form__label}>phone: </p>
      <input
        className={css.form__input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={newContactPhone}
        onChange={event => setNewContactPhone(event.target.value)}
      />
    </div>
    <div>
      <button className={css.form__btn} type="submit">
        add
      </button>
    </div>
  </form>
);
