// import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilter,
  selectServerContacts,
  selectServerData,
} from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { setIsEditing } from 'redux/contacts/fetchcontactslice';

import { Button } from '../button/Button';

const ContactListItem = ({ contact, action, actionedit }) => {
  const { isEditing } = useSelector(selectServerData);
  return (
    <li className={css.item}>
      <div className={css.items_leftside}>
        <p className={css.info}>{contact.name}:</p>
        <a className={css.link} href={'tel:+' + contact.number}>
          {contact.number}
        </a>
      </div>
      <div className={css.items_buttons}>
        {!isEditing && (
          <Button
            label="Edit"
            action={actionedit}
            formButton={false}
            id={contact.id}
          />
        )}
        {!isEditing && (
          <Button
            label="Delete"
            action={action}
            formButton={false}
            id={contact.id}
          />
        )}
      </div>
    </li>
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const serverContacts = useSelector(selectServerContacts);

  const handledeleteContact = evt => {
    evt.preventDefault();
    const id = evt.target.dataset.id;
    dispatch(deleteContact(id));
  };

  const handleEditContact = evt => {
    evt.preventDefault();
    const id = evt.target.dataset.id;
    dispatch(setIsEditing({ id: id, status: true }));
  };

  if (serverContacts.length === 0) {
    return <p className={css.info}>Contacts list empty</p>;
  } else {
    if (filter === '') {
      return (
        <div className={css.wrapper}>
          <h1 className={css.title}>Contacts</h1>
          <ul className={css.holder}>
            {serverContacts.map((contact, index) => (
              <ContactListItem
                key={'id' + index} //{contact.id}
                contact={contact}
                action={handledeleteContact}
                actionedit={handleEditContact}
              />
            ))}
          </ul>
        </div>
      );
    } else {
      const filteredContacts = serverContacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return (
        <div className={css.wrapper}>
          <h1 className={css.title}>Contacts</h1>
          <ul className={css.holder}>
            {filteredContacts.map((contact, index) => (
              <ContactListItem
                key={'id' + index} //{contact.id}
                contact={contact}
                action={handledeleteContact}
                actionedit={handleEditContact}
              />
            ))}
          </ul>
        </div>
      );
    }
  }
};
// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   deleteContact: PropTypes.func,
//   filter: PropTypes.string,
// };
