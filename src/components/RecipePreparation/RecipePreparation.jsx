import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { Button } from '../Button/Button.jsx';
import { selectUser } from '../../redux/user/user.selectors.js';
import css from './RecipePreparation.module.css';
import { MODAL_TYPE } from '../../utils/constants.js';
import { openModal } from '../../redux/modal/modal.slice.js';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/user/user.slice.js';
import { http } from '../../http/index.js';

const initBtnName = ['Remove from favorites', 'Add to favorites'];

export const RecipePreparation = ({ preparation, recipeId }) => {
  // const [loading, setLoading] = useState(false);
  const isLoggedUser = useSelector(selectUser);

  const dispatch = useDispatch();

  let isFavoriteRecipe = false;

  if (isLoggedUser) {
    isFavoriteRecipe = isLoggedUser.favoriteRecipes.includes(recipeId);
  }

  const btnTextContent = isFavoriteRecipe ? initBtnName[0] : initBtnName[1];

  const handleClick = async e => {
    if (!isLoggedUser) {
      return dispatch(openModal(MODAL_TYPE.signin));
    }

    if (!isFavoriteRecipe) {
      // setLoading(true);
      e.target.disabled = true;
      await http
        .post(`/recipes/${recipeId}/favorites`)
        .then(data => {
          e.target.textContent = initBtnName[0];
          dispatch(addToFavorites(recipeId));
        })
        .catch()
        .finally(data => {
          e.target.disabled = false;
          // setLoading(false);
        });
      //TODO: add loader to btn

      return;
    }

    await http.delete(`/recipes/${recipeId}/favorites`).then(data => {
      e.target.textContent = initBtnName[1];
      dispatch(removeFromFavorites(recipeId));
    });
    //TODO: add loader to btn
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
        {/* {loading && (
          <span className={css.spinner}>
            <InfinitySpin
              visible={loading}
              width="120"
              color="#bfbebe"
              ariaLabel="infinity-spin-loading"
            />
          </span>
        )} */}
      </Button>
    </section>
  );
};
