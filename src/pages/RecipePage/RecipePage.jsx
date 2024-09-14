import { useCallback, useEffect, useState } from 'react';
import { PopularRecipes } from '../../components/PopularRecipes/PopularRecipes.jsx';
import { RecipeInfo } from '../../components/RecipeInfo/RecipeInfo.jsx';
import { PathInfo } from '../../components/PathInfo/PathInfo.jsx';

import css from './RecipePage.module.css';
import { useNavigate } from 'react-router-dom';
import { selectError } from '../../redux/user/user.selectors.js';
import { useSelector } from 'react-redux';

const RecipePage = () => {
  const errorMessage = useSelector(selectError);
  const navigate = useNavigate();

  const [breadCrumbs, setBreadCrumbs] = useState('');
  const [seconds, setSeconds] = useState(10);
  const [errorText, setErrorText] = useState(errorMessage);

  useEffect(() => {
    if (!errorText) {
      return;
    }
    const timer = setInterval(() => {
      if (seconds <= 0) {
        navigate('/');
      }
      setSeconds(seconds - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate, seconds, errorText]);

  return (
    <section className={css.section}>
      <div className="container">
        <h1 className="visually-hidden">Recipe Page</h1>
        <PathInfo currentPageName={breadCrumbs} />
        {errorText && (
          <div className={css.errorWrapper}>
            <p>Something went wrong. Please try again after a few seconds.</p>
            <p>{`Time to redirect: ${seconds} sec`}</p>
          </div>
        )}
        {!errorText && (
          <>
            <RecipeInfo
              changeBreadCrumbs={setBreadCrumbs}
              changeError={setErrorText}
            />
            <PopularRecipes changeError={setErrorText} />
          </>
        )}
      </div>
    </section>
  );
};
export default RecipePage;
