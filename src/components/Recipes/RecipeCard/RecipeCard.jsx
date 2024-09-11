import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import styles from './RecipeCard.module.css';
import avatar from '/public/avatar.png';

export const RecipeCard = ({ recipe }) => {
  const { id, title, user, description, thumb } = recipe;

  return (
    <li className={styles.recipeCard}>
      <Link to={`/recipe/${id}`}>
        <img
          src={thumb}
          alt={title || 'Untitled Recipe'}
          className={styles.recipeImage}
        />
      </Link>
      <div className={styles.textWrap}>
        <h3 className={styles.headerCard}>{title || 'Untitled Recipe'}</h3>
        <p className={styles.recipeDescription}>
          {description || 'No description'}
        </p>
      </div>
      <div>
        <Link to={`/user/${user?.id}`} className={styles.avatarWrapper}>
          <img
            src={user?.avatar || avatar}
            alt={`${user?.name || 'User'} avatar`}
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
  );
};
