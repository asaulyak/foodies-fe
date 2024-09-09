// import { useSelector,useDispatch } from 'react-redux';//TODO: uncomment when using store
import { useParams } from 'react-router-dom';
import { Button } from '../Button/Button.jsx';
import css from './RecipePreparation.module.css';

export const RecipePreparation = ({ preparation }) => {
  // const isFavoriteReceipt = useSelector()//TODO: uncomment when using store
  // const isLoggedUser =useSelector()//TODO: uncomment when using store
  // const dispatch = useDispatch(); //TODO:  uncomment when using dispatch
  const isFavoriteReceipt = false; //TODO: delete when using store
  const isLoggedUser = false; //TODO: delete when using store
  const { id: recipeId } = useParams();

  const btnTextContent = isFavoriteReceipt
    ? 'Remove from favorites'
    : 'Add to favorites';

  const handleClick = () => {
    if (!isLoggedUser) {
      //return dispatch(openModal()) //TODO:  uncomment when using dispatch and open modal signIn action
      return; //TODO: delete when using dispatch
    }
    if (!isFavoriteReceipt) {
      // return dispatch(addToFavorites(recipeId));//TODO:  uncomment when using dispatch and add to favorites action
      return; //TODO: delete when using dispatch
    }
    // return dispatch(removeFromFavorites(recipeId));//TODO:  uncomment when using dispatch and remove from favorites action
    return; //TODO: delete when using dispatch
  };

  return (
    <section className={css.section}>
      <h2 className={css.title}>Recipe preparation</h2>
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
