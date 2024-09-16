import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button.jsx';
import {
  selectFavoriteRecipes,
  selectIsLoading,
  selectUser,
  selectError,
} from '../../redux/user/user.selectors.js';
import css from './RecipePreparation.module.css';
import { MODAL_TYPE } from '../../utils/constants.js';
import { openModal } from '../../redux/modal/modal.slice.js';
import {
  addRecipeToFavorites,
  removeRecipeFromFavorites,
} from '../../redux/user/user.actions.js';
import { Loader } from '../Loader/Loader.jsx';
import { useState } from 'react';

const initBtnName = ['Remove from favorites', 'Add to favorites'];

export const RecipePreparation = ({ preparation, recipeId }) => {
  const dispatch = useDispatch();
  const isLoggedUser = useSelector(selectUser);
  const error = useSelector(selectError);
  const favoritesRecipes = useSelector(selectFavoriteRecipes);
  const loading = useSelector(selectIsLoading);

  const [isLoading, setIsLoading] = useState(loading);

  const btnTextContent = favoritesRecipes.includes(recipeId)
    ? initBtnName[0]
    : initBtnName[1];

  const handleClick = e => {
    if (!isLoggedUser || error?.includes(401)) {
      return dispatch(openModal(MODAL_TYPE.signin));
    }

    e.target.disabled = true;
    setIsLoading(true);
    if (!favoritesRecipes.includes(recipeId)) {
      dispatch(addRecipeToFavorites(recipeId))
        .then(data => {
          if (!data.payload.type) {
            e.target.textContent = initBtnName[0];
          }
        })
        .finally(setIsLoading(false));

      return;
    }
    dispatch(removeRecipeFromFavorites(recipeId))
      .then(data => {
        if (!data.payload.type) {
          e.target.textContent = initBtnName[1];
        }
      })
      .finally(setIsLoading(false));
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
      <div>
        <Button disabled={isLoading} onClick={handleClick} className={css.btn}>
          {isLoading ? <Loader /> : btnTextContent}
        </Button>
      </div>
    </section>
  );
};
