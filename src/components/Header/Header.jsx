import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useMemo } from 'react';

export const Header = () => {
  const menu = useMemo(
    () => [
      {
        title: 'Home',
        link: '/',
      },
      // Add links here
    ],
    []
  );

  return (
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
  );
};
