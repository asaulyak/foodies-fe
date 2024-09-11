import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button.jsx';
import { selectInfoUser } from '../../redux/user/user.selectors.js';
import css from './RecipePreparation.module.css';

export const RecipePreparation = ({ preparation, recipeId }) => {
  const dispatch = useDispatch();
  const isLoggedUser = useSelector(selectInfoUser);
  // const favoritesReceipts=useSelector(selectFavoritesReceipts);//TODO: uncomment when using store
  // const isFavoriteRecipe = favoritesReceipts.includes(recipeId); //TODO: uncomment when using store
  const isFavoriteRecipe = false; //TODO: delete when using store

  const btnTextContent = isFavoriteRecipe
    ? 'Remove from favorites'
    : 'Add to favorites';

  const handleClick = () => {
    if (!isLoggedUser) {
      return dispatch(openModal());
    }
    if (!isFavoriteRecipe) {
      // return dispatch(addToFavorites(recipeId));//TODO:  uncomment when using dispatch and add to favorites action
      return; //TODO: delete when using dispatch
    }
    // return dispatch(removeFromFavorites(recipeId));//TODO:  uncomment when using dispatch and remove from favorites action
    return; //TODO: delete when using dispatch
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
      </Button>
    </section>
  );
};
