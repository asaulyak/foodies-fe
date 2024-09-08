import { useEffect, useState } from 'react';
import { PopularRecipes } from '../../components/PopularRecipes/PopularRecipes.jsx';
import { RecipeInfo } from '../../components/RecipeInfo/RecipeInfo.jsx';
import { PathInfo } from '../../components/PathInfo/PathInfo.jsx';

import css from './RecipePage.module.css';

const RecipePage = () => {
  const [breadCrumbs, setBreadCrumbs] = useState('sda');
  const [popularReceipts, setPopularReceipts] = useState([]);

  const changeBreadCrumbs = newValue => setBreadCrumbs(newValue);

  useEffect(() => {}, []);

  return (
    <section className={css.section}>
      <div className="container">
        <h1 className="visually-hidden">Recipe Page</h1>
        <PathInfo currentPageName={breadCrumbs} />
        <RecipeInfo changeBreadCrumbs={changeBreadCrumbs} />
        <PopularRecipes receipt={popularReceipts} />
      </div>
    </section>
  );
};
export default RecipePage;
