import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients.jsx';
import { RecipeMainInfo } from '../RecipeMainIfo/RecipeMainInfo.jsx';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation.jsx';

import { receipt } from './receipt.js';

export const RecipeInfo = ({ changeBreadCrumbs }) => {
  const { id: recipeId } = useParams();
  console.log(receipt);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(openLoader())
    changeBreadCrumbs(receipt.title); //update bread crumbs
    // dispatch(closeLoader());
  }, [receipt]);

  return (
    <>
      <RecipeMainInfo
        id={receipt.id}
        img={receipt.thumb}
        title={receipt.title}
        category={receipt.category.name}
        time={receipt.time}
        description={receipt.description}
        authorName={receipt.user.name}
        authorAvatar={receipt.user.avatar}
      >
        <RecipeIngredients ingredients={receipt.ingredients} />
        <RecipePreparation preparation={receipt.instructions} />
      </RecipeMainInfo>
    </>
  );
};
