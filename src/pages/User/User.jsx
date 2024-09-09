import { useDispatch, useSelector } from 'react-redux';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import css from './User.module.css';
import { useEffect } from 'react';
import { fetchDetailInfoUser } from '../../redux/user/user.actions';
import { selectUser } from '../../redux/user/user.selectors';
import { useParams } from 'react-router-dom';

export const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchDetailInfoUser(id));
  }, [dispatch]);

  return (
    <>
      {/* Header */}
      <div className={css.containerUser}>
        <h1 className={css.title}>User</h1>
        <UserInfo {...currentUser}></UserInfo>
        {/* Component User info */}
        {/* Component log out */}
        {/* Component TabsList */}
        {/* Component ListItems */}
      </div>
    </>
  );
};
