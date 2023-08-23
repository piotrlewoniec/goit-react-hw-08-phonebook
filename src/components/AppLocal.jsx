import React from 'react';
import { useEffect } from 'react';
import css from './App.module.css';
import { ContactForm } from './contactform/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactlist/ContactList';
import { Loader } from './loader/Loader';
import { localStorageLoad } from '../js/system/localstorage';

import { useDispatch, useSelector } from 'react-redux';
import { selectServerData } from 'redux/selectors';
import { addContact } from 'redux/contacts/contactsslice';

export const App = () => {
  const localStorageLibraryName = 'contacts';
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectServerData);

  useEffect(() => {
    if (localStorageLibraryName in localStorage) {
      const libraryLocal = localStorageLoad(localStorageLibraryName);
      for (let element of libraryLocal) {
        dispatch(addContact(element));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.app_holder}>
      <h1 className={css.app_title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.app_subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && <Loader name="RotatingLines" />}
      {error && <p>Communication error. {error}</p>}
    </div>
  );
};
