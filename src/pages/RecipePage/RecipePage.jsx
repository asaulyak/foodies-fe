import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PopularRecipes } from '../../components/PopularRecipes/PopularRecipes.jsx';
import { RecipeInfo } from '../../components/RecipeInfo/RecipeInfo.jsx';
import { PathInfo } from '../../components/PathInfo/PathInfo.jsx';
import { http } from '../../http/index.js';

import css from './RecipePage.module.css';

const RecipePage = () => {
  const [recipe, setRecipe] = useState({});

  const { id: recipeId } = useParams();

  useEffect(() => {
    async function fetchReceipt(id) {
      const response = await http.get(`/recipes/${id}`);
      return response.data;
    }

    async function fetchPopular() {
      const response = await http.get('/recipes/popular');
      return response.data;
    }

    async function fetchData(id) {
      return Promise.allSettled([fetchReceipt(id), fetchPopular()]);
    }

    fetchData(recipeId).then(data => {
      setRecipe(data[0].value);
    });
    //TODO: in development
    // .catch(
    //   e => dispatch(setError(e.message))
    // )
  }, [recipeId]);

  return (
    <section className={css.section}>
      <div className="container">
        <h1 className="visually-hidden">Recipe Page</h1>
        <PathInfo currentPageName={recipe.title || ''} />
        {!!Object.keys(recipe).length && <RecipeInfo recipe={recipe} />}
        {<PopularRecipes />}
      </div>
    </section>
  );
};
export default RecipePage;
