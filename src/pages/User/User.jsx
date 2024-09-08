import { useDispatch } from 'react-redux';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import css from './User.module.css';
import { useEffect, useState } from 'react';
import { fetchCurrentUser } from '../../redux/user/user.actions';
import { selectUser } from '../../redux/user/user.selectors';

export const User = () => {
  const dispatch = useDispatch();
  const currentUser = useState(selectUser || null);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  });

  return (
    <>
      {/* Header */}
      <div className={css.containerUser}>
        <h1 className={css.title}>User</h1>
        <UserInfo></UserInfo>
        {/* Component User info */}
        {/* Component log out */}
        {/* Component TabsList */}
        {/* Component ListItems */}
      </div>
    </>
  );
};
