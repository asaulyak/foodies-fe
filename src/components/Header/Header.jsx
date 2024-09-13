import { NavLink, useLocation } from 'react-router-dom';
import css from './Header.module.css';
import { useMemo, useState } from 'react';
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
    () => location.pathname === '/' && !currentUser,
    [location, currentUser]
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavCLick = event => {
    const target = event.currentTarget;

    if (target?.classList.contains(css.side)) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={css.section}>
      <div className={clsx([css.header])}>
        <Logo />
        {shouldHideMenu ? (
          ''
        ) : (
          <nav
            className={clsx(css.nav, { [css.side]: isMenuOpen })}
            onClick={handleNavCLick}
          >
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
    </div>
  );
};
