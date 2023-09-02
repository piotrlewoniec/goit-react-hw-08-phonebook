import css from './Contacts.module.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { downloadContacts } from 'redux/contacts/operations';

import { ContactList } from 'components/contactlist/ContactList';
import { Filter } from 'components/filter/Filter';
import { ContactForm } from 'components/contactform/ContactForm';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(downloadContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.wrapper}>
      <div>
        <ContactList />
      </div>
      <div className={css.actionpanel}>
        <Filter />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacts;
