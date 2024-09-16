import { Link, useNavigate } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './RecipeCard.module.css';

import {
  selectFavoriteRecipes,
  selectUser,
  selectIsLoading,
  selectError,
} from '../../../redux/user/user.selectors.js';
import { openModal } from '../../../redux/modal/modal.slice.js';
import { MODAL_TYPE } from '../../../utils/constants.js';
import {
  addRecipeToFavorites,
  removeRecipeFromFavorites,
} from '../../../redux/user/user.actions.js';
import { Loader } from '../../Loader/Loader.jsx';
import { Icon } from '../../Icon/Icon.jsx';

export const RecipeCard = ({ recipe, className, borderStyles }) => {
  const { id, title, user, description, thumb } = recipe;
  const favorites = useSelector(selectFavoriteRecipes);
  const isLogged = useSelector(selectUser);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let isFavoriteRecipe = !isLogged ? false : favorites.includes(id);

  const [loading, setLoading] = useState(isLoading);

  const handleClickFavorites = (e, currentId) => {
    if (!isLogged || error?.includes(401)) {
      dispatch(openModal(MODAL_TYPE.signin));
      return;
    }

    if (id === currentId) {
      setLoading(true);
    }

    e.target.disabled = true;

    if (favorites.includes(id)) {
      dispatch(removeRecipeFromFavorites(id))
        .then(data => {
          if (!data.payload.type) {
            isFavoriteRecipe = favorites.includes(id);
          }
        })
        .finally(() => {
          if (id === currentId) {
            setLoading(false);
          }
          e.target.disabled = false;
        });
      return;
    }
    dispatch(addRecipeToFavorites(id))
      .then(data => {
        if (!data.payload.type) {
          isFavoriteRecipe = favorites.includes(id);
        }
      })
      .finally(() => {
        if (id === currentId) {
          setLoading(false);
        }
        e.target.disabled = false;
      });
  };

  const handleClickToRecipe = () => {
    navigate(`/recipe/${id}`);
  };

  const handleClickUser = () => {
    if (!isLogged || error?.includes(401)) {
      return dispatch(openModal(MODAL_TYPE.signin));
    }
    navigate(`/user/${user.id}`);
  };

  return (
    <li className={clsx([styles.card, className])}>
      <Link
        to={`/recipe/${id}`}
        className={clsx([styles.recipeImage, borderStyles])}
      >
        <img
          src={thumb}
          alt={title || 'Untitled Recipe'}
          className={styles.image}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              'https://placehold.co/50x50/BFBEBE/050505?text=Image';
          }}
        />
      </Link>
      <div className={styles.cardContent}>
        <div className={styles.textWrap}>
          <h3 className={styles.headerCard}>{title || 'Untitled Recipe'}</h3>
          <p className={styles.recipeDescription}>
            {description || 'No description'}
          </p>
        </div>
        <div className={styles.avatarIconsRow}>
          <button
            type="button"
            className={styles.btn}
            onClick={handleClickUser}
          >
            <>
              <span className={styles.btnWrapper}>
                <img
                  src={user.avatar || `https://www.gravatar.com/avatar`}
                  alt="User Avatar"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      'https://placehold.co/50x50/BFBEBE/050505?text=Image';
                  }}
                />
              </span>
              <span className={styles.btnThumb}>
                <span className={styles.accentText}>{user.name}</span>
              </span>
            </>
          </button>

          <ul className={styles.iconList}>
            <li>
              <button
                type="button"
                className={styles.iconWrapper}
                onClick={e => handleClickFavorites(e, id)}
              >
                {loading ? (
                  <Loader size={18} />
                ) : favorites.includes(id) ? (
                  <FaHeart size={18} />
                ) : (
                  <FaRegHeart size={18} />
                )}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={styles.iconWrapper}
                onClick={handleClickToRecipe}
              >
                <Icon iconId={'arrow-up'} className={styles.iconArrow} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};
