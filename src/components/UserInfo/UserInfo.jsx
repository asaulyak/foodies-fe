import { useDispatch } from 'react-redux';
import css from './UserInfo.module.css';
import { patchAvatar } from '../../redux/user/user.actions';
import { Icon } from '../Icon/Icon.jsx';

export const UserInfo = ({
  name,
  email,
  avatar,
  totalFavoritesRecipes,
  totalFollowers,
  totalFollowings,
  totalRecipes,
}) => {
  const dispatch = useDispatch();
  const handleFileChange = async e => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append('avatar', file);

    await dispatch(patchAvatar(formData));
  };

  return (
    <>
      <div className={css.userWrap}>
        <div className={css.userImgWrap}>
          <img className={css.userImg} src={avatar} alt="" />
          <div>
            <input
              id="file-upload"
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className={css.userImgBtn}>
              <Icon iconId="plus" width={17} height={16} />
            </label>
          </div>
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
          <li className={css.userDetailInfo}>
            Favorites:
            <span className={css.userDetailsInfoNumber}>
              {totalFavoritesRecipes}
            </span>
          </li>
          <li className={css.userDetailInfo}>
            Followers:
            <span className={css.userDetailsInfoNumber}>{totalFollowers}</span>
          </li>

          <li className={css.userDetailInfo}>
            Following:
            <span className={css.userDetailsInfoNumber}>{totalFollowings}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
