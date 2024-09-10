import { MainTitle } from '../MainTitle/MainTitle';
import { SubTitle } from '../Subtitle/Subtitle';
import css from './Categories.module.css';
import clsx from 'clsx';

export const Categories = () => {
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
      CategoryList
    </div>
  );
};
