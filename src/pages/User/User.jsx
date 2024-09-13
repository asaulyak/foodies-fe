import { useDispatch, useSelector } from 'react-redux';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import css from './User.module.css';
import { useEffect } from 'react';
import {
  fetchCurrentUser,
  fetchDetailInfoUser,
} from '../../redux/user/user.actions';
import {
  selectInfoUser,
  selectIsLoading,
  selectIsLoadingUserInfo,
  selectUser,
} from '../../redux/user/user.selectors';
import { useParams } from 'react-router-dom';
import { TabsList } from '../../components/TabsList/TabsList';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { PathInfo } from '../../components/PathInfo/PathInfo';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { Button } from '../../components/Button/Button';
import { Loader } from '../../components/Loader/Loader';

export const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectInfoUser);
  const owner = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const userCardLoading = useSelector(selectIsLoadingUserInfo);
  // console.log(owner);

  useEffect(() => {
    dispatch(fetchDetailInfoUser(id));
    dispatch(fetchCurrentUser());
  }, [dispatch, id]);

  return (
    <>
      <div className="container">
        <PathInfo currentPageName="Profile"></PathInfo>
        <MainTitle> Profile</MainTitle>
        <SubTitle>
          Reveal your culinary art, share your favorite recipe and create
          gastronomic masterpieces with us.
        </SubTitle>
        <div className={css.userWrapper}>
          <div className={css.userInfoButtonWrapper}>
            {userCardLoading || isLoading ? (
              <Loader></Loader>
            ) : (
              <UserInfo {...currentUser} isOwner={owner.id === id}></UserInfo>
            )}
            {isLoading ? (
              <Loader></Loader>
            ) : owner.id === id ? (
              <Button className={css.logOutBtn}>Log Out</Button>
            ) : (
              <Button className={css.logOutBtn}>Follow</Button>
            )}
          </div>
          {isLoading ? (
            <Loader></Loader>
          ) : (
            <TabsList isOwner={owner.id === id} id={id}></TabsList>
          )}
        </div>
      </div>
    </>
  );
};
