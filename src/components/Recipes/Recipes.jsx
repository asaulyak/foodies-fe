import { Link } from 'react-router-dom';
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

// export const Recipes = ({category}) => {
// const exampleCategoryId = '7dde122e-ea07-461f-84fc-0b9dff87081b';
// const exampleAreaId = 'ecbe58ba-4090-4b26-8f02-b720564d51f1';
// const exampleIngredientIds = ['6c72abf1-f51b-4077-8875-40fbe555e7cb'];
// categoryId: '7dde122e-ea07-461f-84fc-0b9dff87081b',
// categoryId: '',
// categoryId: exampleCategoryId,
// areaId: exampleAreaId,
// ingredientIds: exampleIngredientIds,
export const Recipes = () => {
  const dispatch = useDispatch();
  const filter = {
    areaId: useSelector(selectSelectedAreaId),
    ingredientIds: [useSelector(selectSelectedIngredientId)],
  };

  useEffect(() => {
    dispatch(fetchRecipes(filter));
  }, [dispatch, filter]);

  return (
    <section className={styles.categorySection}>
      <div className={styles.categoryInfoWrap}>
        <Link to="/" className={styles.buttonBack}>
          <FaArrowLeft size={18} />
          <span>Back</span>
        </Link>
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
