import css from './Contacts.module.css';
import { ContactList } from 'components/contactlist/ContactList';
import { Filter } from 'components/filter/Filter';
import { ContactForm } from 'components/contactform/ContactForm';

export const Contacts = () => {
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
