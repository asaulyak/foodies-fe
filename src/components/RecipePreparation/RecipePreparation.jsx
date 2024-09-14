import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { Button } from '../Button/Button.jsx';
import {
  selectFavoriteRecipes,
  selectIsLoading,
  selectUser,
} from '../../redux/user/user.selectors.js';
import css from './RecipePreparation.module.css';
import { MODAL_TYPE } from '../../utils/constants.js';
import { openModal } from '../../redux/modal/modal.slice.js';
import {
  addRecipeToFavorites,
  removeRecipeFromFavorites,
} from '../../redux/user/user.actions.js';

const initBtnName = ['Remove from favorites', 'Add to favorites'];

export const RecipePreparation = ({ preparation, recipeId }) => {
  const dispatch = useDispatch();
  const isLoggedUser = useSelector(selectUser);
  const favoritesRecipes = useSelector(selectFavoriteRecipes);
  const loading = useSelector(selectIsLoading);
  const [showSpinner, setShowSpinner] = useState(loading);

  const isFavoriteRecipe = favoritesRecipes.includes(recipeId);
  const btnTextContent = isFavoriteRecipe ? initBtnName[0] : initBtnName[1];

  const handleClick = e => {
    e.target.disabled = true;
    setShowSpinner(true);
    if (!isLoggedUser) {
      setShowSpinner(false);
      e.target.disabled = false;
      return dispatch(openModal(MODAL_TYPE.signin));
    }
    setTimeout(() => {
      e.target.disabled = false;
      setShowSpinner(false);
    }, 800);

    if (!isFavoriteRecipe) {
      e.target.textContent = initBtnName[0];
      dispatch(addRecipeToFavorites(recipeId));
    } else {
      e.target.textContent = initBtnName[1];
      dispatch(removeRecipeFromFavorites(recipeId));
    }
  };

  return (
    <section className={css.wrapper}>
      <h3 className={css.title}>Recipe preparation</h3>
      <ul className={css.list}>
        {preparation.split('\n').map((text, idx) => (
          <p className={css.item} key={`${Date.now()}-${idx}`}>
            {text}
          </p>
        ))}
      </ul>
      <Button onClick={handleClick} className={css.btn}>
        {btnTextContent}
        {showSpinner && (
          <span className={css.spinner}>
            <InfinitySpin
              visible={loading}
              width="120"
              color="#bfbebe"
              ariaLabel="infinity-spin-loading"
            />
          </span>
        )}
      </Button>
    </section>
  );
};
