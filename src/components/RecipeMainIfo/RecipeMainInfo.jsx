import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './RecipeMainInfo.module.css';
import { RecipeHero } from '../RecipeHero/RecipeHero.jsx';

export const RecipeMainInfo = ({
  children,
  id = '',
  img = '',
  title = 'Dish',
  category = 'Dish',
  time = '0',
  description = 'Dish',
  authorName = 'John',
  authorAvatar = '',
}) => {
  // const isLoggedUser = useSelector();
  const isLoggedUser = false;
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isLoggedUser) {
      console.log('Unauthorized user');
      console.log('Open signInModal');
      //return dispatch(openModal())
      return;
    }
    console.log('Authorized user');
    console.log('Navigate to userpage');
    navigate(`/user/${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <RecipeHero image={img} title={title} />
      <div>
        <section className={styles.infoSection}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.thumb}>
            <p className={styles.info}>{category}</p>
            <p className={styles.info}>{time} min</p>
          </div>

          <p className={styles.description}>{description}</p>
          {/* change after create recipe card btn */}
          <button type="button" className={styles.btn} onClick={handleClick}>
            <div className={styles.btnWrapper}>
              <img
                src={!authorAvatar ? '' : authorAvatar}
                alt="User Avatar"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    'https://placehold.co/50x50/BFBEBE/050505?text=Image';
                }}
              />
            </div>
            <div className={styles.btnthumb}>
              <p className={styles.text}>Created by:</p>
              <p className={styles.accentText}>{authorName}</p>
            </div>
          </button>
        </section>
        {children}
      </div>
    </div>
  );
};
