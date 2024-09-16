import { useDispatch } from 'react-redux';
import css from './UserInfo.module.css';
import {
  fetchDetailInfoUser,
  patchAvatar,
} from '../../redux/user/user.actions';
import { Icon } from '../Icon/Icon.jsx';

export const UserInfo = ({
  id,
  name,
  email,
  avatar,
  totalFavoritesRecipes,
  totalFollowers,
  totalFollowings,
  totalRecipes,
  isOwner,
}) => {
  const dispatch = useDispatch();
  const handleFileChange = async e => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append('avatar', file);

    await dispatch(patchAvatar(formData))
      .unwrap()
      .then(() => dispatch(fetchDetailInfoUser(id)));
  };

  return (
    <>
      <div className={css.userWrap}>
        <div className={css.userImgWrap}>
          <img className={css.userImg} src={avatar} alt="" />
          {isOwner ? (
            <div>
              <input
                id="file-upload"
                type="file"
                className={css.userImgInput}
                onChange={handleFileChange}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    'https://placehold.co/120x120/BFBEBE/050505?text=Avatar';
                }}
                loading="lazy"
              />
              <label htmlFor="file-upload" className={css.userImgBtn}>
                <Icon
                  iconId="plus"
                  className={css.userImgBtnIcon}
                  width={17}
                  height={16}
                />
              </label>
            </div>
          ) : (
            <></>
          )}
        </div>
        <p className={css.userName}>{name}</p>
        <ul className={css.userDetails}>
          <li className={css.userDetailInfo}>
            Email:
            <span className={css.userDetailsInfoNumber}>{email}</span>
          </li>
          <li className={css.userDetailInfo}>
            Added recipes:
            <span className={css.userDetailsInfoNumber}>{totalRecipes}</span>
          </li>
          {isOwner ? (
            <li className={css.userDetailInfo}>
              Favorites:
              <span className={css.userDetailsInfoNumber}>
                {totalFavoritesRecipes}
              </span>
            </li>
          ) : (
            <></>
          )}

          <li className={css.userDetailInfo}>
            Followers:
            <span className={css.userDetailsInfoNumber}>{totalFollowers}</span>
          </li>

          {isOwner ? (
            <li className={css.userDetailInfo}>
              Following:
              <span className={css.userDetailsInfoNumber}>
                {totalFollowings}
              </span>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </>
  );
};
