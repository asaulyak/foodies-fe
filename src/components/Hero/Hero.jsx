import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { selectIsAuthenticated } from '../../redux/user/user.selectors'; // Selector to check if user is authenticated
import { openModal } from '../../redux/modal/modal.slice'; // Action to show modal
import styles from './Hero.module.css';

import mainDishSmall from '../../assets/images/main-dish-small.png';
import mainDishMedium from '../../assets/images/main-dish-medium.png';
import mainDishLarge from '../../assets/images/main-dish-large.png';

import sideDishSmall from '../../assets/images/side-dish-small.png';
import sideDishMedium from '../../assets/images/side-dish-medium.png';
import sideDishLarge from '../../assets/images/side-dish-large.png';

const Hero = () => {
  const navigate = useNavigate(); // React Router hook for navigation
  const dispatch = useDispatch();
  // const isAuthenticated = useSelector(selectIsAuthenticated); // Get auth state from Redux
  const isAuthenticated = true;

  // Handle Add Recipe button click
  const handleAddRecipeClick = () => {
    if (isAuthenticated) {
      // Redirect to Add Recipe Page
      navigate('/create');
    } else {
      // Show sign-in modal if the user is not authenticated
      dispatch(openModal());
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>IMPROVE YOUR CULINARY TALENTS</h1>
        <p className={styles.heroDescription}>
          Amazing recipes for beginners in the world of cooking, enveloping you
          in the aromas and tastes of various cuisines.
        </p>
        <button className={styles.addRecipeBtn} onClick={handleAddRecipeClick}>
          Add Recipe
        </button>

        <div className={styles.heroImages}>
          <picture className={styles.sidePicture}>
            <source media="(max-width: 375px)" srcSet={sideDishSmall} />
            <source media="(max-width: 768px)" srcSet={sideDishMedium} />
            <img
              src={sideDishLarge}
              alt="Side Dish"
              className={styles.sideDish}
            />
          </picture>
          <picture className={styles.mainPicture}>
            <source media="(max-width: 375px)" srcSet={mainDishSmall} />
            <source media="(max-width: 768px)" srcSet={mainDishMedium} />
            <img
              src={mainDishLarge}
              alt="Main Dish"
              className={styles.mainDish}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
