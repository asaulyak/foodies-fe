import { RecipeCard } from '../RecipeCard/RecipeCard';
import styles from './RecipeList.module.css';

export const RecipeList = ({ recipes }) => {
  if (!recipes.length) {
    return <div>No recipes available</div>;
  }

  return (
    <ul className={styles.recipesListWrap}>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};
