import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import clsx from 'clsx';
import styles from './RecipeCard.module.css';

export const RecipeCard = ({ recipe, className }) => {
  const { id, title, user, description, thumb } = recipe;

  return (
    <>
      <li className={clsx([styles.recipeCard, className])}>
        <Link to={`/recipe/${id}`}>
          <img src={thumb} alt={title} className={styles.recipeImage} />
        </Link>
        <div className={styles.textWrap}>
          <h3 className={styles.headerCard}>{title}</h3>
          <p className={styles.recipeDescription}>{description}</p>
        </div>
        <div>
          <Link to={`/user/${user.id}`} className={styles.avatarWrapper}>
            <img
              src={user.avatar}
              alt={`${user.name} avatar`}
              className={styles.avatar}
            />
          </Link>
          <ul className={styles.iconList}>
            <li>
              <FaRegHeart size={18} />
            </li>
            <li>
              <Link to={`/recipe/${id}`} className={styles.iconWrapper}>
                <HiMiniArrowUpRight size={18} />
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};
