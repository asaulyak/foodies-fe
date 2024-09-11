import { Link } from 'react-router-dom';
import { RecipeList } from './RecipeList/RecipeList';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './Recipes.module.css';
import { RecipeFilter } from '../RecipeFilter/RecipeFilter';

export const Recipes = () => {
  return (
    <section className={styles.categorySection}>
      <div className={styles.categoryInfoWrap}>
        <Link to="/" className={styles.buttonBack}>
          <FaArrowLeft size={18} />
          <span>Back</span>
        </Link>
        <h2 className={styles.categoryTitle}>Category</h2>
        <p className={styles.categoryDescription}>
          Go on a taste journey, where every sip is a sophisticated creative
          chord, and every dessert is an expression of the most refined
          gastronomic desires.
        </p>
      </div>

      <div className={styles.recipesListWrap}>
        <RecipeFilter />
        <RecipeList />
      </div>
    </section>
  );
};
