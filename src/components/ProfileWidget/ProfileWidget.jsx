import css from './ProfileWidget.module.css';
import { selectUser } from '../../redux/user/user.selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../redux/user/user.actions.js';
import { useEffect } from 'react';
import { Button } from '../Button/Button.jsx';

export const ProfileWidget = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (user) {
    return (
      <div className={css.user}>
        <div className={css.avatar}>
          <img src={user.avatar} alt={user.name} width="50" height="50" />
        </div>
        <div className={css.username}>{user.name}</div>
      </div>
    );
  }

  return (
    <>
      <Button variant="light">SIGNIN</Button>
    </>
  );
};
