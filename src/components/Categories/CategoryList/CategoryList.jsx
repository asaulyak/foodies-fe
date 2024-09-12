import { useSelector } from 'react-redux';
import { fetchCategories } from '../../../redux/categories/categories.selectors';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import styles from './CategoryList.module.css';
import React, { useEffect, useMemo, useState } from 'react';

const useMediaQuery = query => {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);

  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener('change', onChange);

    return () => mediaQuery.removeEventListener('change', onChange);
  });

  return match;
};

const useMediaQueries = () => {
  const md = useMediaQuery('(min-width: 768px)');
  const lg = useMediaQuery('(min-width: 1440px)');
};

export const CategoryList = () => {
  const categories = useSelector(fetchCategories);

  // const [categories, setCategories] = useState(useSelector(fetchCategories));

  const processCategories = categories => {
    // const { md, lg } = useMediaQueries();

    // console.log(md);
    // console.log(lg);
    // // for (let el = 0; el <= categories.length; el++) {
    // //   if (lg) {
    // //     console.log('large');
    // //   }
    // //   if (md) {
    // //     console.log('medium');
    // //   }
    // //   console.log('mobile');
    // // }

    // if (lg) {
    //   setCategories(categories.slice(0, 11));
    // }
    // if (md) {
    //   setCategories(categories.slice(0, 11));
    // }
    // setCategories(categories.slice(0, 7));

    // console.log(categories);

    return categories.map(category => processCategory(category));
  };

  const processCategory = category => {
    console.log(category);

    return <CategoryCard key={category.id} category={category} />;
  };

  // try {
  //   for (const el = 0; el <= categories.length; el++) {
  //     console.log(el);
  //   }
  // } catch (e) {
  //   console.log(e);
  // }

  return (
    <>
      <ul className={styles.category_list}>
        {
          categories && processCategories(categories)
          // <CategoryCard key={category.id} category={category} />
        }
      </ul>
    </>
  );
};
