import { Button } from '../Button/Button.jsx';
import styles from './RecipeMainInfo.module.css';

const RecipeMainInfo = ({
  img,
  title = 'Dish',
  category = 'Dish',
  time = '0',
  description = 'Dish',
  authorName = 'John',
  authorAvatar = '',
}) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.imgWrapper}>
          <img src={img} alt={`Image ${title}`} />
        </div>
      </section>

      <section className={styles.infoSection}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.thumb}>
          <p className={styles.info}>{category}</p>
          <p className={styles.info}>{time} min</p>
        </div>

        <p className={styles.description}>{description}</p>
        <button type="button" className={styles.btn}>
          <div className={styles.btnWrapper}>
            <img src={authorAvatar} alt="User Avatar" />
          </div>
          <div className={styles.btnthumb}>
            <p className={styles.text}>Created by:</p>
            <p className={styles.accentText}>{authorName}</p>
          </div>
        </button>
      </section>
    </div>
  );
};

export default RecipeMainInfo;
