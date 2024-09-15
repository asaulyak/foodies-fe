import css from './ProfileWidget.module.css';
import { selectUser } from '../../redux/user/user.selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../redux/user/user.actions.js';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button.jsx';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon.jsx';
import clsx from 'clsx';
import { openModal } from '../../redux/modal/modal.slice.js';
import { MODAL_TYPE } from '../../utils/constants.js';

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

  const onOpenModal = type => {
    dispatch(openModal(type));
  };

  const handleLogout = () => {
    onOpenModal(MODAL_TYPE.logout);
  };

  if (user) {
    return (
      <div className={css.profile} onClick={() => handleUserClick()}>
        <div className={css.user}>
          <div className={css.avatar}>
            <img
              src={user.avatar || `https://www.gravatar.com/avatar`}
              alt={user.name}
              width="50"
              height="50"
            />
          </div>
          <div className={css.username}>
            {user.name}{' '}
            <Icon
              iconId="triangle-down"
              className={clsx(css['user-icon'], { [css.down]: profileVisible })}
              width={9}
              height={5}
            />
          </div>
        </div>

        <ul
          className={clsx({
            [css.links]: true,
            'visually-hidden': !profileVisible,
          })}
        >
          <li>
            <Link to={`/user/${user.id}`}>Profile</Link>
          </li>
          <li>
            <button className={css['icon-text']} onClick={handleLogout}>
              Log out{' '}
              <Icon
                iconId="arrow-up"
                width={9}
                height={9}
                className={clsx(css['signout-icon'])}
              />
            </button>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={css.containerSign}>
      <Button
        className={clsx([css.button, css.buttonSignin])}
        onClick={() => onOpenModal(MODAL_TYPE.signin)}
      >
        SIGNIN
      </Button>
      <Button
        className={clsx([css.button, css.buttonSignup])}
        onClick={() => onOpenModal(MODAL_TYPE.signup)}
      >
        SIGNUP
      </Button>
    </div>
  );
};
