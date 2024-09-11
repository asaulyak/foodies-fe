import { Link } from 'react-router-dom';
import { RecipeList } from './RecipeList/RecipeList';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './Recipes.module.css';
import MainTitle from '../MainTitle/MainTitle';
import styles from '../MainTitle/MainTitle.module.css';
import Subtitle from '../Subtitle/Subtitle';

export const Recipes = () => {
  return (
    <section className={styles.categorySection}>
      <div className={styles.categoryInfoWrap}>
        <Link to="/" className={styles.buttonBack}>
          <FaArrowLeft size={18} />
          <span>Back</span>
        </Link>
        <MainTitle>Category</MainTitle>
        <Subtitle>
          Go on a taste journey, where every sip is a sophisticated creative
          chord, and every dessert is an expression of the most refined
          gastronomic desires.
        </Subtitle>
      </div>

      <div className={styles.recipesListWrap}>
        <RecipeList />
      </div>
    </section>
  );
};
