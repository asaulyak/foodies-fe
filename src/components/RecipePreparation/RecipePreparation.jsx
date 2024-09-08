import { useSelector } from 'react-redux';
import { Button } from '../Button/Button.jsx';
import styles from './RecipePreparation.module.css';

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
    <section className={styles.section}>
      <h2 className={styles.title}>Recipe preparation</h2>
      <ul className={styles.list}>
        {preparation.split('\n').map((text, idx) => (
          <p className={styles.item} key={`${Date.now()}-${idx}`}>
            {text}
          </p>
        ))}
      </ul>
      <Button text={btnTextContent} onClick={handleClick} styles={styles.btn} />
    </section>
  );
};
