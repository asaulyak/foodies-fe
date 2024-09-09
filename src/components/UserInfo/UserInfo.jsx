import { useDispatch } from 'react-redux';
import css from './UserInfo.module.css';
import { patchAvatar } from '../../redux/user/user.actions';

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
  // Обработчик изменения файла и сразу же отправки
  const handleFileChange = async e => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

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
              style={{ display: 'none' }} // Скрываем стандартный элемент input
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className={css.userImgBtn}>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 3.3335V12.6668"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.83398 8H13.1673"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
