import { RecipeCard } from '../RecipeCard/RecipeCard';

export const RecipeList = ({ recipes }) => {
  const { data } = recipes;

  return (
    <ul>
      {data.map(recipe => {
        return <RecipeCard key={recipe._id} recipe={recipe} />;
      })}
    </ul>
  );
};
