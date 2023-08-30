import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { UserMenu } from 'components/usermenu/UserMenu';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <header className={css.navi}>
        <nav className={css.link}>
          <NavLink to="contacts">Contacts</NavLink>
          <NavLink to="register">Register</NavLink>
          <NavLink to="login">Login</NavLink>
        </nav>
        <UserMenu />
      </header>
      <main className={css.outpadds}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
