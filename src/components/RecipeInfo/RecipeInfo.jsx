import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients.jsx';
import { RecipeMainInfo } from '../RecipeMainIfo/RecipeMainInfo.jsx';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation.jsx';
import { http } from '../../http/index.js';

export const RecipeInfo = ({ changeBreadCrumbs, changeError }) => {
  const [recipe, setRecipe] = useState(null);
  const { id: recipeId } = useParams();

  const fetchFunc = useCallback(async id => await http.get(`/recipes/${id}`));

  useEffect(() => {
    if (recipe) {
      return;
    }
    fetchFunc(recipeId)
      .then(({ data }) => {
        setRecipe(data);
        changeBreadCrumbs(data.title);
      })
      .catch(e => changeError(e.message));
  }, [recipeId, changeBreadCrumbs, fetchFunc, changeError, recipe]);

  return (
    <>
      {!!recipe && (
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
            changeError={changeError}
          />
        </RecipeMainInfo>
      )}
    </>
  );
};
