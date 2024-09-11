import { RecipeCard } from '../RecipeCard/RecipeCard';
import styles from './RecipeList.module.css';

export const RecipeList = ({ recipes }) => {
  if (!recipes || !recipes.data) {
    return <div>No recipes available</div>;
  }

  return (
    <ul className={styles.recipesListWrap}>
      {recipes.data.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};
