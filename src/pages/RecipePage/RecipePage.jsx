import { useEffect, useState } from 'react';
import { PopularRecipes } from '../../components/PopularRecipes/PopularRecipes.jsx';
import { RecipeInfo } from '../../components/RecipeInfo/RecipeInfo.jsx';
import { PathInfo } from '../../components/PathInfo/PathInfo.jsx';

import styles from './RecipePage.module.css';

export const RecipePage = () => {
  const [breadCrumbs, setBreadCrumbs] = useState('sda');
  const [popularReceipts, setPopularReceipts] = useState([]);

  const changeBreadCrumbs = newValue => setBreadCrumbs(newValue);

  useEffect(() => {}, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Recipe Page</h1>
        <PathInfo currentPageName={breadCrumbs} />
        <RecipeInfo changeBreadCrumbs={changeBreadCrumbs} />
        <PopularRecipes receipt={popularReceipts} />
      </div>
    </section>
  );
};
