import RecipeIngredients from '../RecipeIngredients/RecipeIngredients.jsx';
import RecipeMainInfo from '../RecipeMainIfo/RecipeMainInfo.jsx';
import RecipePreparation from '../RecipePreparation/RecipePreparation.jsx';

const RecipeInfo = () => {
  return (
    <div>
      <RecipeMainInfo />
      <RecipeIngredients />
      <RecipePreparation />
    </div>
  );
};

export default RecipeInfo;
