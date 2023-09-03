// import PropTypes from 'prop-types';
import css from './ContactFormEdit.module.css';
import { Button } from '../button/Button';
import Notiflix from 'notiflix';

import { useSelector, useDispatch } from 'react-redux';
import { selectServerContacts, selectServerData } from 'redux/selectors';
import { updateContact } from 'redux/contacts/operations';
import { setIsEditing } from 'redux/contacts/fetchcontactslice';

export const ContactFormEdit = () => {
  let placeHolderName, placeHolderNumber;
  const dispatch = useDispatch();
  const { idEdit } = useSelector(selectServerData);

  const serverContacts = useSelector(selectServerContacts);

  const element = serverContacts.find(contact => contact.id === idEdit);
  placeHolderName = element.name;
  placeHolderNumber = element.number;

  const handleEditContact = evt => {
    evt.preventDefault();
    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;
    const otherContact = serverContacts.find(contact => contact.name === name);

    if (otherContact && otherContact.id !== idEdit) {
      Notiflix.Notify.info('Contact allready exists');
      return;
    }
    if (name === '' && number === '') {
      Notiflix.Notify.warning('Please input missing data');
      return;
    }
    const regexName = new RegExp("^[a-zA-Za]+(([' -][a-zA-Za])?[a-zA-Za]*)*$");
    const regexNumberPattern =
      /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const regexNumber = new RegExp(regexNumberPattern);

    if (name !== '') {
      if (!regexName.test(name)) {
        Notiflix.Notify.failure('Correct inputed name');
        return;
      }
    }

    if (number !== '') {
      if (!regexNumber.test(number)) {
        Notiflix.Notify.failure('Correct inputed number');
        return;
      }
    }
    let updateContactData;
    if (name !== '' && number !== '') {
      updateContactData = { name: name, number: number };
    } else if (name !== '') {
      updateContactData = { name: name };
    } else if (number !== '') {
      updateContactData = { number: number };
    }

    dispatch(
      updateContact({
        id: idEdit,
        newContactData: updateContactData,
      })
    );
    evt.target.reset();
    dispatch(setIsEditing({ id: '', status: false }));
  };

  const handleCancelEdit = evt => {
    evt.preventDefault();
    dispatch(setIsEditing({ id: '', status: false }));
  };

  return (
    <div className={css.formview}>
      <h3 className={css.form_title}>Edit Contact</h3>
      <form
        name="contactformedit"
        autoComplete="on"
        method="POST"
        validate="true"
        onSubmit={handleEditContact}
      >
        <label className={css.inputlabel}>
          Name
          <input
            className={css.inputfield}
            type="text"
            name="name"
            minLength="2"
            maxLength="50"
            autoComplete="name"
            placeholder={placeHolderName}
            pattern="^[a-zA-Za]+(([' \-][a-zA-Za])?[a-zA-Za]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
        <label className={css.inputlabel}>
          Number
          <input
            className={css.inputfield}
            type="tel"
            name="number"
            autoComplete="tel"
            placeholder={placeHolderNumber}
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          />
        </label>
        <div className={css.formbuttons}>
          <Button label="Edit contact" formButton={true} />
          <Button label="Cancel" formButton={false} action={handleCancelEdit} />
        </div>
      </form>
    </div>
  );
};

// ContactForm.propTypes = {
//   addContact: PropTypes.func,
// };
