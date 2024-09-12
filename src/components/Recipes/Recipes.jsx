import { Link } from 'react-router-dom';
import { RecipeList } from './RecipeList/RecipeList';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './Recipes.module.css';
import { MainTitle } from '../MainTitle/MainTitle';
import { SubTitle } from '../SubTitle/SubTitle';
import { RecipeFilter } from '../RecipeFilter/RecipeFilter';

export const Recipes = () => {
  // export const Recipes = ({category}) => {
  return (
    <section className={styles.categorySection}>
      <div className={styles.categoryInfoWrap}>
        <Link to="/" className={styles.buttonBack}>
          <FaArrowLeft size={18} />
          <span>Back</span>
        </Link>
        <MainTitle>Category</MainTitle>
        {/* <MainTitle>{category.name}</MainTitle> */}
        <SubTitle>
          Go on a taste journey, where every sip is a sophisticated creative
          chord, and every dessert is an expression of the most refined
          gastronomic desires.
        </SubTitle>
        {/* <SubTitle>
         {category.description}
        </SubTitle> */}
      </div>

      <div className={styles.recipesListWrap}>
        <RecipeFilter />
        <RecipeList />
      </div>
    </section>
  );
};
