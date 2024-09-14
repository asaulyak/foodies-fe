import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.css';
import { Button } from '../../Button/Button';
import { MdArrowOutward } from 'react-icons/md';

export const CategoryCard = ({ category }) => {
  const { id, name, description } = category;

  return (
    <>
      {name === 'ALL CATEGORIES' ? (
        <li className={styles.all_categories_card}>
          <Link
            to={`categories/${id}`}
            className={styles.all_categories_card_text_link}
          >
            {name}
          </Link>
        </li>
      ) : (
        <li className={styles.category_card}>
          <img
            className={styles.card_image}
            srcSet={`
                  ${import.meta.env.BASE_URL}/categoryImages/${name}.jpg 1x,
                  ${import.meta.env.BASE_URL}/categoryImages/${name}@2x.jpg 2x
                `}
            src={`${import.meta.env.BASE_URL}/categoryImages/${name}.png`}
            alt={name}
          />
          <div className={styles.card_textbox}>
            <h3 className={styles.card_text}>{name}</h3>
            <button className={styles.card_button}>
              <Link to={`categories/${id}`}>
                <MdArrowOutward size={18} />
              </Link>
            </button>
          </div>
        </li>
      )}
    </>
  );
};
