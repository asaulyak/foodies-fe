import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients.jsx';
import { RecipeMainInfo } from '../RecipeMainIfo/RecipeMainInfo.jsx';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation.jsx';
import { http } from '../../http/index.js';

export const RecipeInfo = ({ changeBreadCrumbs }) => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const { id: recipeId } = useParams();

  const fetchFunc = useCallback(async id => await http.get(`/recipes1/${id}`));

  useEffect(() => {
    fetchFunc(recipeId)
      .then(({ data }) => {
        setRecipe(data);
        changeBreadCrumbs(data.title);
      })
      .catch(e => setError(e.message));
  }, [recipeId, changeBreadCrumbs, fetchFunc]);

  return (
    <>
      {!!recipe && !error && (
        <RecipeMainInfo
          id={recipe.id}
          img={recipe.thumb}
          title={recipe.title}
          category={recipe.category.name}
          time={recipe.time}
          description={recipe.description}
          authorName={recipe.user.name}
          authorAvatar={recipe.user.avatar}
        >
          <RecipeIngredients ingredients={recipe.ingredients} />
          <RecipePreparation
            preparation={recipe.instructions}
            recipeId={recipe.id}
          />
        </RecipeMainInfo>
      )}
    </>
  );
};
