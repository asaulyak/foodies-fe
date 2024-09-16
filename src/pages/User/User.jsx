import { useDispatch, useSelector } from 'react-redux';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import css from './User.module.css';
import { useEffect, useState } from 'react';
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
import { openModal } from '../../redux/modal/modal.slice';
import { http } from '../../http';
import { COLOR_CSS, MODAL_TYPE, SIZE } from '../../utils/constants';
import { toast } from 'react-toastify';

const User = () => {
  const [isLoadingUser, setIsloadingUser] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectInfoUser);
  const owner = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const userCardLoading = useSelector(selectIsLoadingUserInfo);

  useEffect(() => {
    setIsloadingUser(isLoading);
  }, [isLoading]);

  const onOpenModal = type => {
    dispatch(openModal(type));
  };

  const handleSubscribe = async () => {
    try {
      setIsloadingUser(true);
      await http.post(`/users/subscribe/`, { subscribedTo: id });
      setIsSubscribed(true);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsloadingUser(false);
      dispatch(fetchDetailInfoUser(id));
    }
  };

  const handleUnsubscribe = async () => {
    try {
      setIsloadingUser(true);
      await http.delete(`/users/unsubscribe/${id}`);
      setIsSubscribed(false);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsloadingUser(false);
      dispatch(fetchDetailInfoUser(id));
    }
  };

  const handleLogout = () => {
    onOpenModal(MODAL_TYPE.logout);
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailInfoUser(id));
    }

    if (!owner) {
      dispatch(fetchCurrentUser());
    }

    const fetchSubscribeUser = async () => {
      try {
        const { data } = await http.get('/users/following');
        console.log(data);

        const isUserSubscribed = data.data.some(user => user.id === id);
        setIsSubscribed(isUserSubscribed);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    fetchSubscribeUser();
  }, [dispatch, id, owner]);

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
              <div className={css.loaderWrapper}>
                <Loader size={SIZE.large} />
              </div>
            ) : (
              <UserInfo {...currentUser} isOwner={owner?.id === id} />
            )}
            {owner?.id === id ? (
              <Button onClick={handleLogout} className={css.logOutBtn}>
                Log Out
              </Button>
            ) : isSubscribed ? (
              <Button onClick={handleUnsubscribe} className={css.logOutBtn}>
                {isLoadingUser ? (
                  <Loader color={COLOR_CSS.white} />
                ) : (
                  'Following'
                )}
              </Button>
            ) : (
              <Button onClick={handleSubscribe} className={css.logOutBtn}>
                {isLoadingUser ? <Loader color={COLOR_CSS.white} /> : 'Follow'}
              </Button>
            )}
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <TabsList
              totalRecipes={currentUser?.totalRecipes}
              totalFollowers={currentUser?.totalFollowers}
              totalFollowings={currentUser?.totalFollowings}
              totalFavoritesRecipes={currentUser?.totalFavoritesRecipes}
              isOwner={owner?.id === id}
              id={id}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default User;
