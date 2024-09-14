import { NavLink, useMatch } from 'react-router-dom';
import css from './Header.module.css';
import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { Logo } from '../Logo/Logo.jsx';
import { ProfileWidget } from '../ProfileWidget/ProfileWidget.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/user.selectors.js';
import { Icon } from '../Icon/Icon.jsx';
import { openModal } from '../../redux/modal/modal.slice.js';
import { MODAL_TYPE } from '../../utils/constants.js';

export const Header = () => {
  const currentUser = useSelector(selectUser);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);

  const dispatch = useDispatch();

  const categoriesRouteMatch = useMatch('/categories/:id');
  const homeRouteMatch = useMatch('/');

  useEffect(() => {
    setIsHome(!!homeRouteMatch || !!categoriesRouteMatch);
  }, [homeRouteMatch, categoriesRouteMatch]);

  const menu = useMemo(
    () => [
      {
        title: 'Home',
        link: '/',
      },
      {
        title: 'Add recipe',
        link: '/recipe/add',
        action: () => {
          if (!currentUser) {
            dispatch(openModal(MODAL_TYPE.signin));
            return true;
          }

          return false;
        },
      },
    ],
    [currentUser, dispatch]
  );

  const shouldHideMenu = useMemo(
    () => isHome && !currentUser,
    [isHome, currentUser]
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeSideMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavLinkClick = (event, navItem) => {
    if (navItem.action?.()) {
      event.preventDefault();
    }
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
                onClick={event => handleNavLinkClick(event, item)}
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
