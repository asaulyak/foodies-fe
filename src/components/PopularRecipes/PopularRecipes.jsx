import { useCallback, useEffect, useState } from 'react';
import { http } from '../../http/index.js';
import { RecipeCard } from '../Recipes/RecipeCard/RecipeCard.jsx';
import css from './PopularRecipes.module.css';
import { Loader } from '../Loader/Loader.jsx';

export const PopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [errorText, setErrorText] = useState(null);
  const [loader, setLoader] = useState(true);

  const getPopularRecipes = useCallback(
    async () => await http.get('/recipes/popular')
  );

  useEffect(() => {
    if (!!popularRecipes.length) {
      return;
    }
    getPopularRecipes()
      .then(({ data }) => {
        setPopularRecipes(data);
      })
      .catch(e => setErrorText(e.message))
      .finally(setLoader(false));
  }, [getPopularRecipes, popularRecipes]);

  return (
    <section className={css.section}>
      <h2 className={css.sectionTitle}>Popular recipes</h2>
      {loader && <Loader />}
      {errorText && (
        <p>Something went wrong. Please try again after a few seconds.</p>
      )}
      {!!popularRecipes.length && !errorText && !loader && (
        <ul className={css.list}>
          {popularRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} className={css.item} />
          ))}
        </ul>
      )}
    </section>
  );
};
