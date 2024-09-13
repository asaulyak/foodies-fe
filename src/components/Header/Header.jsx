import { NavLink, useLocation } from 'react-router-dom';
import css from './Header.module.css';
import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { Logo } from '../Logo/Logo.jsx';
import { ProfileWidget } from '../ProfileWidget/ProfileWidget.jsx';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/user.selectors.js';
import { Icon } from '../Icon/Icon.jsx';

export const Header = () => {
  const location = useLocation();
  const currentUser = useSelector(selectUser);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location.pathname]);

  const menu = useMemo(
    () => [
      {
        title: 'Home',
        link: '/',
      },
      {
        title: 'Add recipe',
        link: '/recipe/add',
      },
    ],
    []
  );

  const shouldHideMenu = useMemo(
    () => isHome && !currentUser,
    [location, currentUser]
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeSideMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={css.section}>
      <div className={clsx(css.header, { [css.light]: !isHome })}>
        <Logo />
        {shouldHideMenu ? (
          ''
        ) : (
          <nav className={clsx(css.nav, css.main)}>
            {menu.map(item => (
              <NavLink
                key={item.link}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? css.active : undefined
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        )}

        <div className={css.right}>
          <ProfileWidget />

          {shouldHideMenu ? (
            ''
          ) : (
            <div className={css.menu} onClick={toggleMenu}>
              <Icon
                iconId="burger"
                width={21}
                height={17}
                className={css['menu-icon']}
              />
            </div>
          )}
        </div>
      </div>

      <nav
        className={clsx(css.nav, css['side-menu'], { [css.open]: isMenuOpen })}
      >
        <div className={css.close} onClick={closeSideMenu}>
          <Icon iconId="close" width={24} height={24} stroke="#fff" />
        </div>
        {menu.map(item => (
          <NavLink
            key={item.link}
            to={item.link}
            onClick={closeSideMenu}
            className={({ isActive }) => (isActive ? css.active : undefined)}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
