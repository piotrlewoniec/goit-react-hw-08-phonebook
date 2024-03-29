import css from './Login.module.css';

import { useDispatch } from 'react-redux';
import { login } from 'redux/users/operations';

import { Button } from 'components/button/Button';

import Notiflix from 'notiflix';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = evt => {
    evt.preventDefault();
    const email = evt.target.elements.email.value;
    const pwd = evt.target.elements.pwd.value;
    if (email === '' || pwd === '') {
      Notiflix.Notify.warning('Please input missing data');
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
    dispatch(login({ email: email, password: pwd }));
  };

  return (
    <div className={css.formview}>
      <h3 className={css.form_title}>
        Login to <span className={css.logotext}>Phone</span>book
      </h3>
      <form
        name="loginform"
        autoComplete="on"
        method="POST"
        validate="true"
        onSubmit={handleLogin}
      >
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
        <Button label="Login" formButton={true} />
      </form>
    </div>
  );
};

export default Login;
