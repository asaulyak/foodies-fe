import css from './RecipePreview.module.css';
import { Icon } from '../Icon/Icon.jsx';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { http } from '../../http/index.js';

export const RecipePreview = ({
  title,
  description,
  thumb,
  id,
  isOwner,
  onDelete,
  activeTab,
}) => {
  const [maxLengthDescription, setMaxLengthDescription] = useState(50);
  const [maxLengthTitle, setMaxLengthTitle] = useState(13);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setMaxLengthDescription(50);
        setMaxLengthTitle(13);
      } else if (width >= 768 && width < 1440) {
        setMaxLengthDescription(160);
        setMaxLengthTitle(40);
      } else {
        setMaxLengthDescription(160);
        setMaxLengthTitle(70);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleDelete = async () => {
    try {
      if (activeTab === 'recipes') {
        await http.delete(`/recipes/${id}`);
        onDelete(id);
      } else if (activeTab === 'favorites') {
        await http.delete(`/recipes/${id}/favorites`);
        onDelete(id);
      }
    } catch (error) {
      console.error('Failed to delete recipe', error);
    }
  };
  const truncatedDescriptionText =
    description?.length > maxLengthDescription
      ? description.substring(0, maxLengthDescription) + '...'
      : description;
  const truncatedTitleText =
    title?.length > maxLengthTitle
      ? title.substring(0, maxLengthTitle) + '...'
      : title;

  return (
    <li className={css.recipePreviewItem}>
      <img className={css.recipePreviewImg} src={thumb} alt="" />
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
          <button onClick={handleDelete} className={css.recipePreviewBtn}>
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
