import React from 'react';
import css from './UserCard.module.css';
import { MdArrowOutward } from 'react-icons/md';
// import { useLocation } from 'react-router-dom';//TODO: uncoment when using normal tabs
import { useDispatch } from 'react-redux';

export const UserCard = ({ user }) => {
  // const location = useLocation();//TODO: uncomment when using normal tabs
  // const activeTab = location.pathname.split('/').at(-1);//TODO: uncomment when using normal tabs

  const dispatch = useDispatch();

  const activeTab = 'followers';

  const btnName = activeTab === 'followers' ? 'follow' : 'following';

  const baseURL = import.meta.env.BASE_URL;
  const images = [
    'src/components/UserCard/tempImages/recipe1.jpg',
    'src/components/UserCard/tempImages/recipe2.jpg',
    'src/components/UserCard/tempImages/recipe3.jpg',
    'src/components/UserCard/tempImages/recipe4.jpg',
  ];

  const handleClick = () => {
    if (activeTab === 'followers') {
      dispatchEvent();
    }
  };

  return (
    <div className={css.UserCardSection}>
      <div className={css.userInfo}>
        <img
          className={css.UserAvatarImage}
          src={`${baseURL}/src/components/UserCard/tempImages/userAvatar1.jpg`}
          alt=""
        />

        <div className={css.userDetails}>
          <h3>Victor</h3>
          <p>"Own recipes: ${}"</p>
          <button type="button" onClick={handleClick}>
            {btnName}
          </button>
        </div>
      </div>
      <div className={css.recipeImageSection} hidden>
        {images.map((image, index) => (
          <img
            className={css.recipeImage}
            key={index}
            src={`${baseURL}/${image}`}
            alt={`Recipe ${index + 1}`}
          />
        ))}
      </div>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className={css.networkLink}
      >
        <MdArrowOutward />
      </a>
    </div>
  );
};
