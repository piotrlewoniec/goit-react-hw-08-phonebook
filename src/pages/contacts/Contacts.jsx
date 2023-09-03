import css from './Contacts.module.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { downloadContacts } from 'redux/contacts/operations';
import { selectServerData } from 'redux/selectors';

import { ContactList } from 'components/contactlist/ContactList';
import { Filter } from 'components/filter/Filter';
import { ContactForm } from 'components/contactform/ContactForm';
import { ContactFormEdit } from 'components/contactformedit/ContactFormEdit';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isEditing } = useSelector(selectServerData);

  useEffect(() => {
    dispatch(downloadContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.wrapper}>
      <div>
        <ContactList />
      </div>
      {isEditing ? (
        <div className={css.actionpanel}>
          <ContactFormEdit />
        </div>
      ) : (
        <div className={css.actionpanel}>
          <Filter />
          <ContactForm />
        </div>
      )}
    </div>
  );
};

export default Contacts;
