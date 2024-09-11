import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients.jsx';
import { RecipeMainInfo } from '../RecipeMainIfo/RecipeMainInfo.jsx';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation.jsx';
import { http } from '../../http/index.js';

export const RecipeInfo = ({ changeBreadCrumbs }) => {
  const [recipe, setRecipe] = useState({});
  const { id: recipeId } = useParams();

  useEffect(() => {
    async function fetchReceipt(id) {
      const response = await http.get(`/recipes/${id}`);
      return response.data;
    }

    fetchReceipt(recipeId).then(data => {
      setRecipe(data);
      changeBreadCrumbs(data.title);
    });
    // .catch(e => console.log(e.message));//TODO: in development
  }, [recipeId, changeBreadCrumbs]);
  return (
    <>
      {!!Object.keys(recipe).length && (
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
