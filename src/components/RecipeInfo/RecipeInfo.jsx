import { useLocation, useParams } from 'react-router-dom';
import RecipeIngredients from '../RecipeIngredients/RecipeIngredients.jsx';
import RecipeMainInfo from '../RecipeMainIfo/RecipeMainInfo.jsx';
import RecipePreparation from '../RecipePreparation/RecipePreparation.jsx';

import { receipt } from './receipt.js';
import { useEffect } from 'react';

console.log(receipt);

const RecipeInfo = ({ changeBreadCrumbs }) => {
  const { id: recipeId } = useParams();

  useEffect(() => {
    changeBreadCrumbs(receipt.title);
  }, [receipt]);

  return (
    <div>
      <RecipeMainInfo
        id={receipt.id}
        img={receipt.thumb}
        title={receipt.title}
        category={receipt.category.name}
        time={receipt.time}
        description={receipt.description}
        authorName={receipt.user.name}
        authorAvatar={receipt.user.avatar}
      />
      <RecipeIngredients />
      <RecipePreparation />
    </div>
  );
};

export default RecipeInfo;
