import { useSelector } from 'react-redux';
import { Button } from '../Button/Button.jsx';
import css from './RecipePreparation.module.css';

export const RecipePreparation = ({ preparation }) => {
  // const isFavoriteReceipt = useSelector()
  // const isLoggedUser =useSelector()
  const isFavoriteReceipt = false;
  const isLoggedUser = false;

  const btnTextContent = isFavoriteReceipt
    ? 'Remove from favorites'
    : 'Add to favorites';

  const handleClick = () => {
    console.log('Button clicked');
    if (!isLoggedUser) {
      console.log('open modal signin');
      return;
    }
    console.log(`${btnTextContent} this receipt`);
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
