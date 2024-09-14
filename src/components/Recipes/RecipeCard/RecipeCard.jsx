import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';
import { MdArrowOutward } from 'react-icons/md';
import clsx from 'clsx';
import styles from './RecipeCard.module.css';

export const RecipeCard = ({ recipe }) => {
  const { id, title, user, description, thumb } = recipe;

  return (
    <li className={clsx([styles.card])}>
      <Link to={`/recipe/${id}`}>
        <img
          src={thumb}
          alt={title || 'Untitled Recipe'}
          className={styles.recipeImage}
        />
      </Link>
      <div className={styles.cardContent}>
        <div className={styles.textWrap}>
          <h3 className={styles.headerCard}>{title || 'Untitled Recipe'}</h3>
          <p className={styles.recipeDescription}>
            {description || 'No description'}
          </p>
        </div>
        <div className={styles.avatarIconsRow}>
          <div className={styles.userWrapper}>
            <span>
              <Link to={`/user/${user.id}`}>
                <img
                  src={user.avatar || `https://www.gravatar.com/avatar`}
                  alt={`${user.name} avatar`}
                  className={styles.avatar}
                />
              </Link>
            </span>
            <p className={styles.userName}>{user.name}</p>
          </div>

          <ul className={styles.iconList}>
            <li className={styles.iconWrapper}>
              <FaRegHeart size={18} />
            </li>
            <li>
              <Link to={`/recipe/${id}`} className={styles.iconWrapper}>
                <MdArrowOutward size={18} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};
