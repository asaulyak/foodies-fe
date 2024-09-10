import { RecipeCard } from '../RecipeCard/RecipeCard';
import styles from './RecipeList.module.css';

export const RecipeList = ({ recipes }) => {
  const { data } = recipes;

  return (
    <ul className={styles.recipesListWrap}>
      {data.map(recipe => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </ul>
  );
};
