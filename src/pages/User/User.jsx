import { useDispatch, useSelector } from 'react-redux';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import css from './User.module.css';
import { useEffect } from 'react';
import {
  fetchCurrentUser,
  fetchDetailInfoUser,
} from '../../redux/user/user.actions';
import { selectInfoUser, selectUser } from '../../redux/user/user.selectors';
import { useParams } from 'react-router-dom';
import { TabsList } from '../../components/TabsList/TabsList';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { PathInfo } from '../../components/PathInfo/PathInfo';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { Button } from '../../components/Button/Button';

export const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectInfoUser);
  useEffect(() => {
    dispatch(fetchCurrentUser(id));
    dispatch(fetchDetailInfoUser(id));
  }, [dispatch]);

  return (
    <>
      <div className="container">
        {/* Component TITLE  */}
        <PathInfo currentPageName="Profile"></PathInfo>
        <MainTitle> Profile</MainTitle>
        <SubTitle>
          Reveal your culinary art, share your favorite recipe and create
          gastronomic masterpieces with us.
        </SubTitle>
        <div className={css.userWrapper}>
          <div className={css.userInfoButtonWrapper}>
            <UserInfo {...currentUser}></UserInfo>
            <Button className={css.logOutBtn}>Log Out</Button>
          </div>
          <TabsList isOwner id={id}></TabsList>
        </div>
      </div>
    </>
  );
};
