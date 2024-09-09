import { Link } from 'react-router-dom';
import { RecipeList } from './RecipeList/RecipeList';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './Recipes.module.css';

export const Recipes = () => {
  return (
    <section className={styles.category_section}>
      <div className={styles.category_info_wrap}>
        <Link to="/" className={styles.button_back}>
          <FaArrowLeft size={18} />
          <span>Back</span>
        </Link>
        <h2 className={styles.category_title}>Category</h2>
        <p className={styles.category_description}>
          Go on a taste journey, where every sip is a sophisticated creative
          chord, and every dessert is an expression of the most refined
          gastronomic desires.
        </p>
      </div>

      <div className={styles.recipes_list_wrap}>
        <RecipeList />
      </div>
    </section>
  );
};
