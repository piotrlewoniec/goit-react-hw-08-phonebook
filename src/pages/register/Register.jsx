import css from './Register.module.css';
import { Button } from 'components/button/Button';

export const Register = () => {
  return (
    <div className={css.formview}>
      <h3 className={css.form_title}>Add new Contact</h3>
      <form
        name="contactform"
        autoComplete="on"
        method="POST"
        validate="true"
        onSubmit={0}
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
