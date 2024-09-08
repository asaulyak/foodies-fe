import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients.jsx';
import { RecipeMainInfo } from '../RecipeMainIfo/RecipeMainInfo.jsx';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation.jsx';
import { http } from '../../http/index.js';

export const RecipeInfo = ({ changeBreadCrumbs }) => {
  const { id: recipeId } = useParams();
  const [receipt, setReceipt] = useState({});
  // const dispatch = useDispatch();
  //

  useEffect(() => {
    async function fetchData(id) {
      if (!id) return;
      const res = await http.get(`/recipes/${id}`);
      return res.data;
    }

    // dispatch(openLoader())

    fetchData(recipeId).then(data => {
      setReceipt(data);
      changeBreadCrumbs(data.title);
      return data;
    });
    //  .catch(dispatch(setError))
    // .finally( dispatch(closeLoader())
  }, [recipeId, changeBreadCrumbs]);

  return (
    <>
      {!!Object.keys(receipt).length && (
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
      )}
    </>
  );
};
