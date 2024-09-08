// Delete after created component
const RecipeCard = ({ data }) => {
  return (
    <li>
      <h3>{data.title}</h3>
    </li>
  );
};
// --------------------
import styles from './PopularRecipes.module.css';

export const PopularRecipes = ({ recipes }) => {
  return (
    <section>
      <h2 className={styles.sectionTitle}>Popular recipes</h2>
      {/* {recipes.map(recipe => (
        <RecipeCard key={recipe.id} data={recipe} />
      ))} */}
    </section>
  );
};
