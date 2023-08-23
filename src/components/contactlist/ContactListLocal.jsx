// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { Button } from '../button/Button';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/contactsslice';

import {
  localStorageGetStatus,
  localStorageRemove,
} from 'js/locallibrary/locallibrary';
import Notiflix from 'notiflix';

const ContactListItem = ({ contact, action }) => (
  <li className={css.item}>
    <div className={css.items_leftside}>
      <p className={css.info}>{contact.name}:</p>
      <a className={css.link} href={'tel:+' + contact.number}>
        {contact.number}
      </a>
    </div>
    <Button label="Delete" action={action} formButton={false} id={contact.id} />
  </li>
);

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const localStorageLibraryName = 'contacts';

  const handledeleteContact = evt => {
    evt.preventDefault();
    const id = evt.target.dataset.id;

    const element = localStorageGetStatus(localStorageLibraryName, id, 'id'); // libraryName, element, keySearch
    if (element !== undefined) {
      localStorageRemove(localStorageLibraryName, id, 'id');
    } else {
      Notiflix.Notify.info('Contact does not exists in localstorage');
    }
    dispatch(deleteContact(id));
  };

  if (contacts.length === 0) {
    return <p className={css.info}>Contacts list empty</p>;
  } else {
    if (filter === '') {
      return (
        <ul className={css.holder}>
          {contacts.map((contact, index) => (
            <ContactListItem
              key={'id' + index} //{contact.id}
              contact={contact}
              action={handledeleteContact}
            />
          ))}
        </ul>
      );
    } else {
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return (
        <ul className={css.holder}>
          {filteredContacts.map((contact, index) => (
            <ContactListItem
              key={'id' + index} //{contact.id}
              contact={contact}
              action={deleteContact}
            />
          ))}
        </ul>
      );
    }
  }
};
// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   deleteContact: PropTypes.func,
//   filter: PropTypes.string,
// };
