import { RecipeCard } from '../RecipeCard/RecipeCard';
import styles from './RecipeList.module.css';

export const RecipeList = ({ recipes }) => {
  const { data } = recipes;

  return (
    <ul className={styles.recipes_list_wrap}>
      {data.map(recipe => {
        return <RecipeCard key={recipe._id} recipe={recipe} />;
      })}
    </ul>
  );
};
