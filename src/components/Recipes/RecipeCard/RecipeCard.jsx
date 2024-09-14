import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';
import { MdArrowOutward } from 'react-icons/md';
import clsx from 'clsx';
import styles from './RecipeCard.module.css';
import avatar from '/public/avatar.png';

export const RecipeCard = ({ recipe }) => {
  const { id, title, user, description, thumb } = recipe;

  return (
    <li className={clsx([styles.recipeCard, styles.card])}>
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
              <Button type="button" className={css.btn} onClick={handleClick}>
                <div className={css.btnWrapper}>
                  <img
                    src={user?.avatar || avatar}
                    alt={`${user?.name || 'User'} avatar`}
                    className={styles.avatar}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src =
                        'https://placehold.co/50x50/BFBEBE/050505?text=Image';
                    }}
                  />
                </div>
                <div className={css.btnThumb}>
                  <p className={css.accentText}>{authorName}</p>
                </div>
              </Button>
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
