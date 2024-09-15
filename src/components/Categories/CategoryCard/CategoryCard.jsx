import { Link } from 'react-router-dom';
import css from './CategoryCard.module.css';
import { MdArrowOutward } from 'react-icons/md';
import clsx from 'clsx';

export const CategoryCard = ({ category }) => {
  const { id, name } = category;

  return (
    <>
      {id === 'all' ? (
        <li className={css.all_categories_card}>
          <Link
            to={`categories/${id}`}
            className={css.all_categories_card_text_link}
          >
            {name}
          </Link>
        </li>
      ) : (
        <li className={clsx(css.category_card)}>
          <Link to={`categories/${id}`}>
            <img
              className={css.card_image}
              srcSet={`
                  ${import.meta.env.BASE_URL}/categoryImages/${name}.jpg 1x,
                  ${import.meta.env.BASE_URL}/categoryImages/${name}@2x.jpg 2x
                `}
              src={`${import.meta.env.BASE_URL}/categoryImages/${name}.jpg`}
              alt={name}
            />
          </Link>

          <div className={css.card_textbox}>
            <h3 className={css.card_text}>{name}</h3>
            <button className={css.card_button}>
              <MdArrowOutward size={18} />
            </button>
          </div>
        </li>
      )}
    </>
  );
};
