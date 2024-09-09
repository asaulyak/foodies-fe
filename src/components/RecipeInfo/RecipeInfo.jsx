import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients.jsx';
import { RecipeMainInfo } from '../RecipeMainIfo/RecipeMainInfo.jsx';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation.jsx';

export const RecipeInfo = ({ recipe }) => {
  return (
    <>
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
        <RecipePreparation preparation={recipe.instructions} />
      </RecipeMainInfo>
    </>
  );
};
