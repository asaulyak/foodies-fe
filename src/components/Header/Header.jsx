import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useMemo } from 'react';
import clsx from 'clsx';
import { Logo } from '../Logo/Logo.jsx';
import { ProfileWidget } from '../ProfileWidget/ProfileWidget.jsx';

export const Header = () => {
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

  return (
    <div className={clsx([css.header, css.light])}>
      <Logo />

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

      <ProfileWidget />
    </div>
  );
};
