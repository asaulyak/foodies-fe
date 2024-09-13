import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button.jsx';
import { selectUser } from '../../redux/user/user.selectors.js';
import css from './RecipePreparation.module.css';
import { MODAL_TYPE } from '../../utils/constants.js';
import { openModal } from '../../redux/modal/modal.slice.js';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/user/user.slice.js';

const initBtnName = ['Remove from favorites', 'Add to favorites'];

export const RecipePreparation = ({ preparation, recipeId }) => {
  const isLoggedUser = useSelector(selectUser);

  const [favorites, setFavorites] = useState([]);
  const [btnName, setbtnName] = useState(initBtnName[0]);

  const dispatch = useDispatch();

  const isFavoriteRecipe = favorites.includes(recipeId);

  const btnTextContent = isFavoriteRecipe ? initBtnName[0] : initBtnName[1];

  useEffect(() => {
    setFavorites(isLoggedUser?.info?.favoriteRecipes || []);
    setbtnName(btnTextContent);
  }, []);
  // recipesRouter.post('/:id/favorites', authMiddleware, addToFavorites);
  // recipesRouter.delete('/:id/favorites', authMiddleware, removeFromFavorites);
  //'/api/recipes'

  const handleClick = e => {
    console.dir(favorites);
    if (!isLoggedUser) {
      return dispatch(openModal(MODAL_TYPE.signin));
    }
    console.log('first');
    if (!favorites.includes(recipeId)) {
      console.log('second');
      setbtnName(initBtnName[1]);
      setFavorites(prev => [...prev, recipeId]);

      // return dispatch(addToFavorites(recipeId)); //TODO:  uncomment when using dispatch and add to favorites action
    } else {
      console.log('third');
      setbtnName(initBtnName[0]);
      setFavorites(prev => prev.filter(e => e !== recipeId));

      // return dispatch(removeFromFavorites(recipeId)); //TODO:  uncomment when using dispatch and remove from favorites action
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
        {btnName}
      </Button>
    </section>
  );
};
