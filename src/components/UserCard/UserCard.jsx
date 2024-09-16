import React from 'react';
import css from './UserCard.module.css';
import { MdArrowOutward } from 'react-icons/md';
import { Button } from '../Button/Button.jsx';
import { http } from '../../http/index.js';

const initBtnName = ['follow', 'following'];

export const UserCard = ({
  avatar,
  id,
  name,
  recipes,
  activeTab,
  ownsRecipes,
  onDelete = null,
  subscribe,
  handleClickNavigate,
}) => {
  const btnName = subscribe ? initBtnName[1] : initBtnName[0];

  const handleClick = async e => {
    if (e.target.textContent === initBtnName[0] && activeTab === 'followers') {
      await http.post('/users/subscribe', { subscribedTo: id }).then(data => {
        e.target.textContent = initBtnName[1];
      });
      return;
    }
    if (e.target.textContent === initBtnName[1] && activeTab === 'followers') {
      await http.delete(`/users/unsubscribe/${id}`).then(data => {
        e.target.textContent = initBtnName[0];
      });
      return;
    }
    if (e.target.textContent === initBtnName[1] && activeTab === 'following') {
      await http.delete(`/users/unsubscribe/${id}`).then(data => {
        onDelete(id);
      });
      return;
    }
  };

  return (
    <li className={css.userCardItem}>
      <div className={css.userInfo}>
        <div className={css.avatarWrapper}>
          <img
            className={css.userAvatarImage}
            src={avatar || ''}
            alt="Avatar"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                'https://placehold.co/85x85/BFBEBE/050505?text=Avatar';
            }}
            loading="lazy"
          />
        </div>

        <div className={css.userDetails}>
          <h3 className={css.userName}>{name}r</h3>
          <p className={css.userDescription}>{`Own recipes: ${ownsRecipes}`}</p>
          <Button onClick={handleClick} className={css.mainBtn}>
            {btnName}
          </Button>
        </div>
      </div>
      <ul className={css.recipeImageList}>
        {recipes.map(image => (
          <li key={image.id} className={css.imageItem}>
            <div className={css.imageWrapper}>
              <img
                className={css.recipeImage}
                key={image.id}
                src={image.thumb}
                alt="Recipe img"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    'https://placehold.co/100x100/BFBEBE/050505?text=Recipe';
                }}
                loading="lazy"
              />
            </div>
          </li>
        ))}
      </ul>
      <Button
        onClick={() => handleClickNavigate(id)}
        className={css.secondaryBtn}
      >
        <MdArrowOutward />
      </Button>
    </li>
  );
};
