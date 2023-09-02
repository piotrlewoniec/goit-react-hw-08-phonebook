import css from './UserMenu.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/users/operations';
import { selectUser, selectIsLoggedIn } from 'redux/selectors';

import { Button } from '../button/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isLoggedIn) {
    return (
      <div className={css.wrapper}>
        <p className={css.elements}>
          {user.name === null ? 'unknown' : `${user.name}`}
        </p>
        <p className={css.elements}>
          {user.email === null ? 'unknown' : `${user.email}`}
        </p>
        <Button label="Logout" formButton={false} action={handleLogout} />
      </div>
    );
  } else {
    return (
      <div className={css.wrapper}>
        <p className={css.email}>Please login</p>
      </div>
    );
  }
};
