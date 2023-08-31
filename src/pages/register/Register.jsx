import css from './Register.module.css';
import { Button } from 'components/button/Button';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { register } from 'redux/users/operations';

export const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = evt => {
    evt.preventDefault();
    const username = evt.target.elements.username.value;
    const email = evt.target.elements.email.value;
    const pwd = evt.target.elements.pwd.value;
    const repwd = evt.target.elements.repwd.value;
    if (username === '' || email === '' || pwd === '') {
      Notiflix.Notify.warning('Please input missing data');
      return;
    }
    if (pwd !== repwd) {
      Notiflix.Notify.warning('Please repeat password');
      return;
    }

    // const regexEmailPattern =
    //   /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    // const regexEmail = new RegExp(regexEmailPattern);
    // const regexPwdPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).8,}/;
    // const regexPwd = new RegExp(regexPwdPattern);
    // if (!regexEmail.test(regexEmail) || !regexPwd.test(regexPwd)) {
    //   Notiflix.Notify.failure('Correct inputed data');
    //   return;
    // }
    console.log({ name: username, email: email, password: pwd });
    dispatch(register({ name: username, email: email, password: pwd }));
  };

  return (
    <div className={css.formview}>
      <h3 className={css.form_title}>Register</h3>
      <form
        name="registerform"
        autoComplete="on"
        method="POST"
        validate="true"
        onSubmit={handleRegister}
      >
        <label className={css.inputlabel}>
          Username
          <input
            className={css.inputfield}
            type="text"
            name="username"
            minLength="2"
            maxLength="50"
            autoComplete="name"
            placeholder=" "
            title="Input user name"
            required
          />
        </label>
        <label className={css.inputlabel}>
          E-mail
          <input
            className={css.inputfield}
            type="email"
            name="email"
            autoComplete="email"
            placeholder=" "
            // pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
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
            minLength="8"
            autoComplete="off"
            placeholder=" "
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).8,}"
            title="Password must contain at least 8 characters, including UPPER/lowercase and numbers."
            required
          />
        </label>
        <label className={css.inputlabel}>
          Repeat password
          <input
            className={css.inputfield}
            type="password"
            name="repwd"
            minLength="8"
            autoComplete="off"
            placeholder=" "
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).8,}"
            title="Password must contain at least 8 characters, including UPPER/lowercase and numbers."
            required
          />
        </label>
        <Button label="Register" formButton={true} />
      </form>
    </div>
  );
};
