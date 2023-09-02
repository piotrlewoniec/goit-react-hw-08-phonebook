import css from './Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
import { Link } from 'react-router-dom';

import { selectToken } from 'redux/selectors';
import { selectIsRefreshing } from 'redux/selectors';
import { userinfo } from 'redux/users/operations';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

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
        <button
          type="button"
          onClick={() => {
            dispatch(userinfo());
            // dispatch(
            //   uploadContact({ name: 'Dzon Don', number: '312312 32112 312' })
            // );
            // dispatch(deleteContact('64f09becd3b3ba001499bdcf'));
            console.log(user);
            console.log(token);
            console.log(isLoggedIn);
            console.log(isRefreshing);
          }}
        >
          Info
        </button>
      </section>
    );
  }
};

export default Home;
