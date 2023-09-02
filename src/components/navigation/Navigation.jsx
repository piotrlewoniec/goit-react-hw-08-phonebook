import css from './Navigation.module.css';

import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

import { UserMenu } from 'components/usermenu/UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header className={css.navi}>
        <nav className={css.link}>
          <NavLink to="home">Home</NavLink>
          {!isLoggedIn && <NavLink to="register">Register</NavLink>}
          {!isLoggedIn && <NavLink to="login">Login</NavLink>}
          {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
        </nav>
        {isLoggedIn && <UserMenu />}
      </header>
      <main className={css.outpadds}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
