import React from 'react';
import css from './UserCard.module.css';
import { MdArrowOutward } from 'react-icons/md';
import { Button } from '../Button/Button.jsx';
import { http } from '../../http/index.js';

const initBtnName = ['follow', 'following'];

export const UserCard = ({ user, activeTab, deleteCard = null }) => {
  activeTab = 'followers';

  const btnName = activeTab === 'followers' ? initBtnName[0] : initBtnName[1];

  const baseURL = import.meta.env.BASE_URL;
  const images = [
    'src/components/UserCard/tempImages/recipe1.jpg',
    'src/components/UserCard/tempImages/recipe2.jpg',
    'src/components/UserCard/tempImages/recipe3.jpg',
    'src/components/UserCard/tempImages/recipe4.jpg',
  ];

  const handleClick = async e => {
    if (e.target.textContent === initBtnName[0] && activeTab === 'followers') {
      await http
        .post('/users/subscribe', { subscribedTo: user.id })
        .then(data => {
          e.target.textContent = initBtnName[1];
        });
      return;
    }
    if (e.target.textContent === initBtnName[1] && activeTab === 'followers') {
      await http.delete(`/users/unsubscribe/${user.id}`).then(data => {
        e.target.textContent = initBtnName[0];
      });
      return;
    }
    if (e.target.textContent === initBtnName[1] && activeTab === 'following') {
      await http.delete(`/users/unsubscribe/${user.id}`).then(data => {
        if (!deleteCard) return;
        deleteCard(user.id);
      });
      return;
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
          <Button onClick={handleClick} className={css.mainBtn}>
            {btnName}
          </Button>
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
