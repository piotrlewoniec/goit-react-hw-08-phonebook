import css from './UserMenu.module.css';
import { Button } from '../button/Button';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/users/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.email}>mango@mail.com</p>
      <Button label="Logout" formButton={false} action={handleLogout} />
    </div>
  );
};
