import React from 'react';
import styles from './Hero.module.css';

import mainDishSmall from '../../assets/images/main-dish-small.png';
import mainDishMedium from '../../assets/images/main-dish-medium.png';
import mainDishLarge from '../../assets/images/main-dish-large.png';

import sideDishSmall from '../../assets/images/side-dish-small.png';
import sideDishMedium from '../../assets/images/side-dish-medium.png';
import sideDishLarge from '../../assets/images/side-dish-large.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>IMPROVE YOUR CULINARY TALENTS</h1>
        <p className={styles.heroDescription}>
          Amazing recipes for beginners in the world of cooking, enveloping you
          in the aromas and tastes of various cuisines.
        </p>
        <button className={styles.addRecipeBtn}>Add Recipe</button>

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
