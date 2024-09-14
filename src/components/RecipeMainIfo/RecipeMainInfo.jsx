import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import css from './RecipeMainInfo.module.css';
import { RecipeHero } from '../RecipeHero/RecipeHero.jsx';
import { Button } from '../Button/Button.jsx';
import { openModal } from '../../redux/modal/modal.slice.js';
import { selectUser } from '../../redux/user/user.selectors.js';
import { MODAL_TYPE } from '../../utils/constants.js';

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
  const isLoggedUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isLoggedUser) {
      return dispatch(openModal(MODAL_TYPE.signin));
    }
    navigate(`/user/${id}`);
  };

  return (
    <div className={css.wrapper}>
      <RecipeHero image={img} title={title} />
      <div>
        <section className={css.infoSection}>
          <h2 className={css.title}>{title}</h2>
          <div className={css.thumb}>
            <p className={css.info}>{category}</p>
            <p className={css.info}>{time} min</p>
          </div>
          <p className={css.description}>{description}</p>

          <button type="button" className={css.btn} onClick={handleClick}>
            <>
              <span className={css.btnWrapper}>
                <img
                  src={!authorAvatar ? '' : authorAvatar}
                  alt="User Avatar"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      'https://placehold.co/50x50/BFBEBE/050505?text=Image';
                  }}
                />
              </span>
              <span className={css.btnThumb}>
                <span className={css.text}>Created by:</span>
                <span className={css.accentText}>{authorName}</span>
              </span>
            </>
          </button>
        </section>
        {children}
      </div>
    </div>
  );
};
