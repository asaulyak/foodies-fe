import { NavLink, useLocation } from 'react-router-dom';
import css from './Header.module.css';
import { useMemo } from 'react';
import clsx from 'clsx';
import { Logo } from '../Logo/Logo.jsx';
import { ProfileWidget } from '../ProfileWidget/ProfileWidget.jsx';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/user.selectors.js';

export const Header = () => {
  const location = useLocation();
  const currentUser = useSelector(selectUser);

  const menu = useMemo(
    () => [
      {
        title: 'Home',
        link: '/',
      },
      {
        title: 'Add recipe',
        link: '/create-recipe',
      },
    ],
    []
  );

  const shouldHideMenu = useMemo(
    () => location.pathname === '/' && !currentUser,
    [location, currentUser]
  );

  return (
    <div className={clsx([css.header])}>
      <Logo />
      {shouldHideMenu ? (
        ''
      ) : (
        <nav className={css.nav}>
          {menu.map(item => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive }) => (isActive ? css.active : undefined)}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      )}

      <ProfileWidget />
    </div>
  );
};
