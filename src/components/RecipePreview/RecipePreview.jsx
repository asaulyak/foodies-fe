import css from './RecipePreview.module.css';
import { Icon } from '../Icon/Icon.jsx';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const RecipePreview = ({ title, description, thumb, id, isOwner }) => {
  const [maxLengthDescription, setMaxLengthDescription] = useState(50); // дефолт для мобильных
  const [maxLengthTitle, setMaxLengthTitle] = useState(13); // дефолт для мобильных

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setMaxLengthDescription(50); // мобильные устройства
        setMaxLengthTitle(13);
      } else if (width >= 768 && width < 1440) {
        setMaxLengthDescription(160); // планшеты
        setMaxLengthTitle(40);
      } else {
        setMaxLengthDescription(160); // десктопы
        setMaxLengthTitle(70);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // удаляем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const truncatedDescriptionText =
    description.length > maxLengthDescription
      ? description.substring(0, maxLengthDescription) + '...'
      : description;
  const truncatedTitleText =
    title.length > maxLengthTitle
      ? title.substring(0, maxLengthTitle) + '...'
      : title;

  return (
    <li className={css.recipePreviewItem}>
      <img
        className={css.recipePreviewImg}
        src={thumb ? thumb : '../../assets/images/defaultimg.jpg'}
        alt=""
      />
      <div className={css.recipePreviewOverlay}>
        <p className={css.recipePreviewTitle}>{truncatedTitleText}</p>
        <p className={css.recipePreviewDescription}>
          {truncatedDescriptionText}
        </p>
      </div>
      <div className={css.recipePreviewWrapperIcon}>
        <NavLink className={css.recipePreviewBtn} to={`/recipe/${id}`}>
          <Icon
            iconId="arrow-recipes"
            className={css.recipePreviewIcon}
            width={16}
            height={16}
            stroke={'#050505'}
          ></Icon>
        </NavLink>
        {isOwner ? (
          <button className={css.recipePreviewBtn}>
            <Icon
              iconId="trash"
              className={css.recipePreviewIcon}
              width={18}
              height={18}
              stroke={'#050505'}
            >
              {' '}
            </Icon>
          </button>
        ) : (
          <></>
        )}
      </div>
    </li>
  );
};
