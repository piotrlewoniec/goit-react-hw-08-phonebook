import css from './Login.module.css';
import { Button } from 'components/button/Button';

export const Login = () => {
  return (
    <div className={css.formview}>
      <h3 className={css.form_title}>Login</h3>
      <form
        name="loginform"
        autoComplete="on"
        method="POST"
        validate="true"
        onSubmit={0}
      >
        <label className={css.inputlabel}>
          E-mail
          <input
            className={css.inputfield}
            type="email"
            name="email"
            autoComplete="email"
            placeholder=" "
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            title="Input email"
            required
          />
        </label>
        <label className={css.inputlabel}>
          Password
          <input
            className={css.inputfield}
            type="password"
            name="pwd"
            minlength="8"
            maxLength="30"
            autoComplete="off"
            placeholder=" "
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).8,}"
            title="Password must contain at least 8 characters, including UPPER/lowercase and numbers."
            required
          />
        </label>
        <Button label="Login" formButton={true} />
      </form>
    </div>
  );
};
