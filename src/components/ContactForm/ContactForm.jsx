import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './ContactForm.module.css';
import { addContact } from '../../redux/contactSlice';
import { getContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addNewContact(name, number);
    setName('');
    setNumber('');
  };

  const addNewContact = (name, number) => {
    let result = contacts.find(item => item.name === name);
    if (result) {
      return alert(`${name} is already in contacts`);
    }
    const newUser = { name, number, id: nanoid() };
    dispatch(addContact(newUser));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input
          className={style.input}
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p>Number</p>
        <input
          className={style.input}
          name="number"
          type="tel"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={style.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};


export default ContactForm;
