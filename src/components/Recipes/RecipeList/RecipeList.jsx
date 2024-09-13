import { RecipeCard } from '../RecipeCard/RecipeCard';
import styles from './RecipeList.module.css';
import { useSelector } from 'react-redux';
import { selectRecipesState } from '../../../redux/recipes/recipes.selectors';

export const RecipeList = () => {
  const recipes = useSelector(selectRecipesState);
  console.log(recipes);
  if (!recipes || !recipes.data) {
    return <div>No recipes available</div>;
  }

  return (
    <ul className={styles.recipesListWrap}>
      {recipes.recipes.data.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};
