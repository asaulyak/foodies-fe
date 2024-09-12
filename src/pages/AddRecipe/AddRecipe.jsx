import css from './AddRecipe.module.css';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { PathInfo } from '../../components/PathInfo/PathInfo';
import clsx from 'clsx';

import { AddRecipeForm } from '../../components/AddRecipeForm/AddRecipeForm';

const AddRecipe = () => (
  <>
    <section className={clsx(css.section, 'container')}>
      <PathInfo currentPageName={'Add recipe'}></PathInfo>
      <MainTitle className={css.form_mainTitle}>{'Add recipe'}</MainTitle>
      <SubTitle className={css.form_subTitle}>
        {
          'Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us.'
        }
      </SubTitle>
      <AddRecipeForm></AddRecipeForm>
    </section>
  </>
);
export default AddRecipe;
