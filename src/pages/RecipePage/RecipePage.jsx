import { useCallback, useEffect, useState } from 'react';
import { PopularRecipes } from '../../components/PopularRecipes/PopularRecipes.jsx';
import { RecipeInfo } from '../../components/RecipeInfo/RecipeInfo.jsx';
import { PathInfo } from '../../components/PathInfo/PathInfo.jsx';

import css from './RecipePage.module.css';
import { useNavigate } from 'react-router-dom';

const RecipePage = () => {
  const [breadCrumbs, setBreadCrumbs] = useState('');
  const [errorText, setErrorText] = useState(true);
  const [seconds, setSeconds] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds <= 0) {
        navigate('/');
      }
      setSeconds(seconds - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate, seconds]);
  console.log('red');
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
