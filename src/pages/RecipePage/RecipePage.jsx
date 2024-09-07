import { useLocation, useParams, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PopularRecipes from '../../components/PopularRecipes/PopularRecipes.jsx';
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo.jsx';

import styles from './RecipePage.module.css';
import { PathInfo } from '../../components/PathInfo/PathInfo.jsx';

// Deleted after created common component
const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

// -------------------------------------------------------

export const RecipePage = () => {
  const { id: recipeId } = useParams();
  const pageName = 'salmon';
  //   const [receipt, setReceipt] = useState({});
  //   const [popular, setPopular] = useState([]);
  //   const dispatch = useDispatch();

  //   useEffect(() => {}, []);

  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.title}>Recipe Page</h1>
        <PathInfo currentPageName={pageName} />
        {/* <RecipeInfo /> */}
        {/* <PopularRecipes /> */}
      </Container>
    </section>
  );
};
