import css from './ProfileWidget.module.css';
import { selectUser } from '../../redux/user/user.selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../redux/user/user.actions.js';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button.jsx';
import { NavLink } from 'react-router-dom';
import { Icon } from '../Icon/Icon.jsx';
import clsx from 'clsx';

export const ProfileWidget = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const [profileVisible, setProfileVisible] = useState(false);

  const handleUserClick = () => {
    setProfileVisible(prevState => !prevState);
  };

  if (user) {
    return (
      <div className={css.profile} onClick={() => handleUserClick()}>
        <div className={css.user}>
          <div className={css.avatar}>
            <img
              src={user.avatar || `${import.meta.env.BASE_URL}/avatar.png`}
              alt={user.name}
              width="50"
              height="50"
            />
          </div>
          <div className={css.username}>
            {user.name}{' '}
            <Icon
              iconId="triangle-down"
              className={css['user-icon']}
              width={9}
              height={5}
            />
          </div>
        </div>

        <div className={css['links-wrapper']}>
          <ul
            className={clsx({
              [css.links]: true,
              'visually-hidden': !profileVisible,
            })}
          >
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <a href="" className={css['icon-text']}>
                Log out{' '}
                <Icon
                  iconId="arrow-up"
                  width={9}
                  height={9}
                  className={css['signout-icon']}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <Button variant="light">SIGNIN</Button>
    </>
  );
};
