import { useDispatch, useSelector } from 'react-redux';
import { MainTitle } from '../MainTitle/MainTitle';
import { SubTitle } from '../SubTitle/SubTitle';
import css from './Categories.module.css';
import clsx from 'clsx';
import { selectError, selectIsLoading } from '../../redux/user/user.selectors';
import { useEffect } from 'react';
import { fetchCategories } from '../../redux/categories/categories.actions';
import { CategoryList } from './CategoryList/CategoryList';
import { Loader } from '../Loader/Loader';

export const Categories = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={clsx([css.categories])}>
      <div className={css.text}>
        <MainTitle>Categories</MainTitle>
        <SubTitle>
          Discover a limitless world of culinary possibilities and enjoy
          exquisite recipes that combine taste, style and the warm atmosphere of
          the kitchen.
        </SubTitle>
      </div>
      {isLoading ? <Loader /> : <CategoryList />}
    </div>
  );
};
