import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients.jsx';
import { RecipeMainInfo } from '../RecipeMainIfo/RecipeMainInfo.jsx';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation.jsx';

import { getReceiptById } from '../../common/api/api.js';
// import { receipt } from '../../pages/RecipePage/db.js';

export const RecipeInfo = ({ changeBreadCrumbs }) => {
  // const { id: recipeId } = useParams();
  // const [receipt, setReceipt] = useState({});
  // const dispatch = useDispatch();
  const baseId = 'b71a0921-2794-439f-a611-b9f011e65df1';

  useEffect(() => {
    async function fetchData(id) {
      return await getReceiptById(id);
    }

    fetchData(baseId).then(console.log);
    // dispatch(openLoader())
    // console.log(res);
    // changeBreadCrumbs(receipt.title); //update bread crumbs
    // dispatch(closeLoader());
  }, []);

  return (
    <>
      {/* <RecipeMainInfo
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
      </RecipeMainInfo> */}
    </>
  );
};
