import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import styles from './RecipeCard.module.css';

export const RecipeCard = ({ recipe }) => {
  const { _id, title, owner, description, thumb } = recipe;

  return (
    <>
      <li className={styles.recipeCard}>
        <Link to={`/recipe/${_id}`}>
          <img src={thumb} alt={title} className={styles.recipeImage} />
        </Link>
        <div className={styles.textWrap}>
          <h3 className={styles.header_card}>{title}</h3>
          <p className={styles.recipeDescription}>{description}</p>
        </div>
        <div>
          <Link to={`/user/${owner._id}`} className={styles.avatarWrapper}>
            <img
              src={owner.avatar}
              alt={`${owner.name} avatar`}
              className={styles.avatar}
            />
          </Link>
          <ul className={styles.iconList}>
            <li>
              <FaRegHeart size={18} />
            </li>
            <li>
              <Link to={`/recipe/${_id}`} className={styles.iconWrapper}>
                <HiMiniArrowUpRight size={18} />
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};
