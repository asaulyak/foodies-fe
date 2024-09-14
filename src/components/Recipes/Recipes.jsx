import { NavLink, useParams } from 'react-router-dom';
import { RecipeList } from './RecipeList/RecipeList';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './Recipes.module.css';
import list_styles from './RecipeList/RecipeList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSelectedAreaId,
  selectSelectedIngredientId,
} from '../../redux/recipes/recipes.selectors.js';
import { useEffect, useState } from 'react';
import { fetchRecipes } from '../../redux/recipes/recipes.actions.js';
import { MainTitle } from '../MainTitle/MainTitle.jsx';
import { RecipeFilter } from '../RecipeFilter/RecipeFilter.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import { SubTitle } from '../SubTitle/SubTitle.jsx';
import { categoriesList } from '../../redux/categories/categories.selectors.js';

export const Recipes = () => {
  const { id: categoryId } = useParams();
  const categories = useSelector(categoriesList);
  const [category, setCategory] = useState();

  const dispatch = useDispatch();
  const filter = {
    areaId: useSelector(selectSelectedAreaId),
    ingredientIds: [useSelector(selectSelectedIngredientId)],
  };

  useEffect(() => {
    if (categories) {
      if (categoryId !== 'all' && categoryId) {
        setCategory(categories.find(({ id }) => id === categoryId));

        filter.categoryId = categoryId;
      } else {
        setCategory({
          id: 'all',
          name: 'ALL CATEGORIES',
          description:
            'Go on a taste journey, where every sip is a sophisticated creative chord, and every recipe is an expression of the most refined gastronomic desires.',
        });
      }
    }
  }, [categoryId]);

  useEffect(() => {
    dispatch(fetchRecipes(filter));
  }, [dispatch, filter]);

  return (
    <section className={styles.categorySection}>
      <div className={styles.categoryInfoWrap}>
        <NavLink to="/" className={styles.buttonBack}>
          <FaArrowLeft size={18} />
          <span>Back</span>
        </NavLink>
        <MainTitle>{category && category.name}</MainTitle>
        <SubTitle>{category && category.description}</SubTitle>
      </div>

      <div className={list_styles.recipesSectionWrap}>
        <RecipeFilter />
        <div className={list_styles.recipesListContent}>
          <RecipeList />
          <Pagination total={16} limit={8} />
        </div>
      </div>
    </section>
  );
};

export default Recipes;
