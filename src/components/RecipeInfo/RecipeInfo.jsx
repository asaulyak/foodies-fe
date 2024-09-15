import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients.jsx';
import { RecipeMainInfo } from '../RecipeMainIfo/RecipeMainInfo.jsx';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation.jsx';
import { http } from '../../http/index.js';
import { Loader } from '../Loader/Loader.jsx';

export const RecipeInfo = ({ changeBreadCrumbs }) => {
  const [recipe, setRecipe] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [loader, setLoader] = useState(true);
  const { id: recipeId } = useParams();

  useEffect(() => {
    if (recipe && recipeId === recipe.id) {
      return;
    }
    const fetchFunc = async id => await http.get(`/recipes/${id}`);

    fetchFunc(recipeId)
      .then(({ data }) => {
        setRecipe(data);
        changeBreadCrumbs(data.title);
      })
      .catch(e => setErrorText(e.message))
      .finally(setLoader(false));
  }, [recipeId, changeBreadCrumbs, recipe]);

  return (
    <>
      {loader && <Loader />}
      {errorText && (
        <p>Something went wrong. Please try again after a few seconds.</p>
      )}
      {!!recipe && !errorText && !loader && (
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
