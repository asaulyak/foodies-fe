import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import { RecipeList } from './RecipeList/RecipeList';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './Recipes.module.css';
import list_styles from './RecipeList/RecipeList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { MainTitle } from '../MainTitle/MainTitle.jsx';
import { RecipeFilter } from '../RecipeFilter/RecipeFilter.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import { SubTitle } from '../SubTitle/SubTitle.jsx';
import { categoriesList } from '../../redux/categories/categories.selectors.js';
import { http } from '../../http/index.js';
import { Loader } from '../Loader/Loader.jsx';
import { fetchCategoriesList } from '../../redux/categories/categories.actions.js';

export const Recipes = () => {
  const { id: categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [pagination, setPagination] = useState({ limit: 12, total: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(null);

  const categories = useSelector(categoriesList);

  const dispatch = useDispatch();

  const recipesRef = useRef(null);

  const scrollToTop = () => {
    if (recipesRef.current) {
      recipesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (!categories?.length) {
      dispatch(fetchCategoriesList());
    }
  }, [dispatch]);

  useEffect(() => {
    setCategory(categories?.find(item => item.id === categoryId) || null);
  }, [categories, categoryId]);

  useEffect(() => {
    const ingredientId = searchParams.get('ingredient');
    const areaId = searchParams.get('area');
    const page = searchParams.get('page');

    const updatedFilter = {
      categoryId: categoryId === 'all' ? undefined : categoryId,
    };

    if (ingredientId) {
      updatedFilter['ingredientIds[]'] =
        ingredientId === 'all' ? undefined : ingredientId;
    }

    if (areaId) {
      updatedFilter.areaId = areaId === 'all' ? undefined : areaId;
    }

    if (page) {
      updatedFilter.page = page;
    }

    updatedFilter.limit = pagination.limit;

    setFilters(updatedFilter);
  }, [categoryId, searchParams]);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);

      try {
        const { data: response } = await http.get(`/recipes/search`, {
          params: filters,
        });

        setRecipes(response.data);
        scrollToTop();
        setPagination(state => ({ ...state, total: response.total }));
      } catch (e) {
        setRecipes([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (Object.keys(filters).length) {
      fetchRecipes();
    }
  }, [filters]);

  return (
    <section className={styles.categorySection}>
      <div className={styles.categoryInfoWrap}>
        <NavLink to="/" className={styles.buttonBack}>
          <FaArrowLeft size={18} />
          <span>Back</span>
        </NavLink>
        {category && (
          <>
            <MainTitle>{category.name}</MainTitle>
            <SubTitle>{category.description}</SubTitle>
          </>
        )}
      </div>

      <div className={list_styles.recipesSectionWrap}>
        <RecipeFilter />
        <div ref={recipesRef} className={list_styles.recipesListContent}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <RecipeList recipes={recipes} />
              <Pagination
                total={pagination.total}
                limit={pagination.limit}
                onPageChange={scrollToTop}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
