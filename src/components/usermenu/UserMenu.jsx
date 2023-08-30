import css from './UserMenu.module.css';
import { Button } from '../button/Button';

export const UserMenu = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.email}>mango@mail.com</p>
      <Button label="Logout" formButton={false} />
    </div>
  );
};
