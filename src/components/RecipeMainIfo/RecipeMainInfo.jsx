import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './RecipeMainInfo.module.css';

export const RecipeMainInfo = ({
  children,
  id = '',
  img,
  title = 'Dish',
  category = 'Dish',
  time = '0',
  description = 'Dish',
  authorName = 'John',
  authorAvatar = '',
}) => {
  // const isLoggedUser = useSelector();
  const isLoggedUser = true;
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('click');
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
      <section className={styles.hero}>
        <div className={styles.imgWrapper}>
          <img src={img} alt={`Image ${title}`} />
        </div>
      </section>
      <div>
        <section className={styles.infoSection}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.thumb}>
            <p className={styles.info}>{category}</p>
            <p className={styles.info}>{time} min</p>
          </div>

          <p className={styles.description}>{description}</p>
          <button type="button" className={styles.btn} onClick={handleClick}>
            <div className={styles.btnWrapper}>
              <img src={authorAvatar} alt="User Avatar" />
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
