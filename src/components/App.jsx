import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import style from './App.module.css';

const App = () => {
  return (
    <div className={style.book}>
      <h1 className={style.text}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.text}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
