import { useEffect, useState } from 'react';
import { http } from '../../http/index.js';
import { RecipeCard } from '../Recipes/RecipeCard/RecipeCard.jsx';
import css from './PopularRecipes.module.css';

export const PopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    async function fetchPopular() {
      const response = await http.get('/recipes/popular');
      return response.data;
    }

    fetchPopular().then(setPopularRecipes);
    //TODO: in development
    // .catch(
    //   e => dispatch(setError(e.message))
    // )
  }, []);

  return (
    <section className={css.section}>
      <h2 className={css.sectionTitle}>Popular recipes</h2>
      {!!popularRecipes.length && (
        <ul className={css.list}>
          {popularRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} className={css.item} />
          ))}
        </ul>
      )}
    </section>
  );
};
