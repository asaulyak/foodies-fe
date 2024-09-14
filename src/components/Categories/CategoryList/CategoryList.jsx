import { useSelector } from 'react-redux';
import { categoriesList } from '../../../redux/categories/categories.selectors';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import styles from './CategoryList.module.css';
import React, { useEffect, useMemo, useState } from 'react';
import { v4 } from 'uuid';

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

  return { md, lg };
};

export const CategoryList = () => {
  const categories = useSelector(categoriesList);
  const { md, lg } = useMediaQueries();

  const [categoriesRender, setCategoriesRender] = useState([]);

  useEffect(() => {
    if (categories) {
      const arr = [...categories];
      if (md) {
        setCategoriesRender([
          ...arr.slice(0, 11),
          {
            id: 'all',
            name: 'ALL CATEGORIES',
            description:
              'Go on a taste journey, where every sip is a sophisticated creative chord, and every recipe is an expression of the most refined gastronomic desires.',
          },
        ]);
      } else {
        setCategoriesRender([
          ...arr.slice(0, 7),
          {
            id: 'all',
            name: 'ALL CATEGORIES',
            description:
              'Go on a taste journey, where every sip is a sophisticated creative chord, and every recipe is an expression of the most refined gastronomic desires.',
          },
        ]);
      }
    }
  }, [categories, md, lg]);

  const processCategories = categories => {
    return categories.map(category => (
      <CategoryCard key={category.id} category={category} />
    ));
  };

  return (
    <>
      <ul className={styles.category_list}>
        {categoriesRender && processCategories(categoriesRender)}
      </ul>
    </>
  );
};
