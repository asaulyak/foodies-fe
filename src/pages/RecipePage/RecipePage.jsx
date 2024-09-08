import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PopularRecipes from '../../components/PopularRecipes/PopularRecipes.jsx';
import { RecipeInfo } from '../../components/RecipeInfo/RecipeInfo.jsx';

import styles from './RecipePage.module.css';
import { PathInfo } from '../../components/PathInfo/PathInfo.jsx';

export const RecipePage = () => {
  const [breadCrumbs, setBreadCrumbs] = useState('');

  const changeBreadCrumbs = newValue => setBreadCrumbs(newValue);

  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Recipe Page</h1>
        <PathInfo currentPageName={breadCrumbs} />
        <RecipeInfo changeBreadCrumbs={changeBreadCrumbs} />
        {/* <PopularRecipes /> */}
      </div>
    </section>
  );
};
