// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { Button } from '../button/Button';
import Notiflix from 'notiflix';

import { useSelector, useDispatch } from 'react-redux';
import { selectServerContacts } from 'redux/selectors';
import { createContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const serverContacts = useSelector(selectServerContacts);

  const handleAddContact = evt => {
    evt.preventDefault();
    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;
    if (name !== '' && serverContacts.find(contact => contact.name === name)) {
      Notiflix.Notify.info('Contact allready exists');
      return;
    }
    if (name === '' || number === '') {
      Notiflix.Notify.warning('Please input missing data');
      return;
    }
    const regexName = new RegExp("^[a-zA-Za]+(([' -][a-zA-Za])?[a-zA-Za]*)*$");
    const regexNumberPattern =
      /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const regexNumber = new RegExp(regexNumberPattern);
    if (!regexName.test(name) || !regexNumber.test(number)) {
      Notiflix.Notify.failure('Correct inputed data');
      return;
    }
    dispatch(createContact({ name: name, number: number }));
    evt.target.reset();
  };

  return (
    <div className={css.formview}>
      <h3 className={css.form_title}>Add new Contact</h3>
      <form
        name="contactform"
        autoComplete="on"
        method="POST"
        validate="true"
        onSubmit={handleAddContact}
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
            placeholder=" "
            pattern="^[a-zA-Za]+(([' \-][a-zA-Za])?[a-zA-Za]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.inputlabel}>
          Number
          <input
            className={css.inputfield}
            type="tel"
            name="number"
            autoComplete="tel"
            placeholder=" "
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button label="Add contact" formButton={true} />
      </form>
    </div>
  );
};

// ContactForm.propTypes = {
//   addContact: PropTypes.func,
// };
