// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { Button } from '../button/Button';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectServerContacts } from 'redux/selectors';

import { removeContact } from 'redux/contacts/operations';

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

  const serverContacts = useSelector(selectServerContacts);

  const handledeleteContact = evt => {
    evt.preventDefault();
    const id = evt.target.dataset.id;
    dispatch(removeContact(id));
  };

  if (serverContacts.length === 0) {
    return <p className={css.info}>Contacts list empty</p>;
  } else {
    if (filter === '') {
      return (
        <div className={css.wrapper}>
          <h1 className={css.title}>Phonebook</h1>
          <ul className={css.holder}>
            {serverContacts.map((contact, index) => (
              <ContactListItem
                key={'id' + index} //{contact.id}
                contact={contact}
                action={handledeleteContact}
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
          <h1 className={css.title}>Phonebook</h1>
          <ul className={css.holder}>
            {filteredContacts.map((contact, index) => (
              <ContactListItem
                key={'id' + index} //{contact.id}
                contact={contact}
                action={handledeleteContact}
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
