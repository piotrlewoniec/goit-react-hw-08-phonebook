import css from './Home.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
import { Link } from 'react-router-dom';

export const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  if (!isLoggedIn) {
    return (
      <section>
        <h1>
          Welcome to <span className={css.logotext}>Phone</span>book
        </h1>
        <p>You are not logged in.</p>
        <p>
          Please{' '}
          <Link className={css.link} to="register">
            register
          </Link>{' '}
          or{' '}
          <Link className={css.link} to="login">
            login.
          </Link>
        </p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>
          Welcome to <span className={css.logotext}>Phone</span>book
        </h1>
        <p className={css.user}>
          {' '}
          {user.name === null ? 'Unknown' : `${user.name}`}
        </p>
        <p>
          You are logged as{' '}
          <span className={css.email}>
            {user.email === null ? 'unknown' : `${user.email}`}
          </span>
        </p>
      </section>
    );
  }
};
