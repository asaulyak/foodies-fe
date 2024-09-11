import { useDispatch, useSelector } from 'react-redux';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import css from './User.module.css';
import { useEffect } from 'react';
import { fetchDetailInfoUser } from '../../redux/user/user.actions';
import { selectInfoUser } from '../../redux/user/user.selectors';
import { useParams } from 'react-router-dom';
import { TabsList } from '../../components/TabsList/TabsList';

export const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectInfoUser);

  useEffect(() => {
    dispatch(fetchDetailInfoUser(id));
  }, [dispatch]);

  return (
    <>
      <div className={css.containerUser}>
        <h1 className={css.title}>User</h1>
        <UserInfo {...currentUser}></UserInfo>
        <TabsList isOwner id={id}></TabsList>
      </div>
    </>
  );
};
