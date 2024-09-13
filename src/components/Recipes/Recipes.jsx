import { NavLink } from 'react-router-dom';
import { RecipeList } from './RecipeList/RecipeList';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './Recipes.module.css';
import { MainTitle } from '../MainTitle/MainTitle';
import { SubTitle } from '../SubTitle/SubTitle';
import { RecipeFilter } from '../RecipeFilter/RecipeFilter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRecipes } from '../../redux/recipes/recipes.actions';
import {
  selectSelectedAreaId,
  selectSelectedIngredientId,
} from '../../redux/recipes/recipes.selectors';
import Pagination from '../../components/Pagination/Pagination';

export const Recipes = () => {
  const dispatch = useDispatch();
  const filter = {
    categoryId: '',
    areaId: useSelector(selectSelectedAreaId),
    ingredientIds: [useSelector(selectSelectedIngredientId)],
  };
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
        <MainTitle>Category</MainTitle>
        {/* <MainTitle>{category.name}</MainTitle> */}
        <SubTitle>
          Go on a taste journey, where every sip is a sophisticated creative
          chord, and every dessert is an expression of the most refined
          gastronomic desires.
        </SubTitle>
        {/* <SubTitle>
         {category.description}
        </SubTitle> */}
      </div>

      <div className={styles.recipesListWrap}>
        <RecipeFilter />
        <RecipeList />
        <Pagination total={16} limit={8} />
      </div>
    </section>
  );
};
