import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PopularRecipes } from '../../components/PopularRecipes/PopularRecipes.jsx';
import { RecipeInfo } from '../../components/RecipeInfo/RecipeInfo.jsx';
import { PathInfo } from '../../components/PathInfo/PathInfo.jsx';
import { http } from '../../http/index.js';

import css from './RecipePage.module.css';

const RecipePage = () => {
  const [breadCrumbs, setBreadCrumbs] = useState('');
  const [popularRecipes, setPopularRecipes] = useState([]);
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

    // dispatch(openLoader())//TODO: in development
    fetchReceipt(recipeId).then(data => {
      setRecipe(data);
      setBreadCrumbs(data.title);
    });
    // dispatch(setError(error.message))//TODO: in development
    // dispatch(closeLoader())//TODO: in development
  }, [recipeId]);

  return (
    <section className={css.section}>
      <div className="container">
        <h1 className="visually-hidden">Recipe Page</h1>
        <PathInfo currentPageName={breadCrumbs} />
        {!!Object.keys(recipe).length && <RecipeInfo recipe={recipe} />}
        {/* //TODO: in development */}
        {/* <PopularRecipes receipt={popularRecipes} /> */}
      </div>
    </section>
  );
};
export default RecipePage;
