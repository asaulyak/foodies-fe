import React, { useEffect } from 'react';
import styles from './RecipeFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAreas,
  selectIngredients,
} from '../../redux/recipes/recipes.selectors';
import { selectError, selectIsLoading } from '../../redux/user/user.selectors';
import {
  fetchAreas,
  fetchIngredients,
} from '../../redux/recipes/recipes.actions';
import {
  setSelectedIngredient as setSelectedIngredientAction,
  setSelectedArea as setSelectedAreaAction,
} from '../../redux/recipes/recipes.slice';
import Select from 'react-select';

export const RecipeFilter = ({ handleSelectChange }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector(selectIngredients);
  const areas = useSelector(selectAreas);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const ingredientsOptions = ingredients?.map(ingredient => ({
    value: ingredient.id,
    label: ingredient.name,
  }));

  const areasOptions = areas?.map(area => ({
    value: area.id,
    label: area.name,
  }));

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchAreas());
  }, [dispatch]);

  const handleIngredientChange = e => {
    dispatch(setSelectedIngredientAction(e.value));
  };

  const handleAreaChange = e => {
    dispatch(setSelectedAreaAction(e.value));
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#bfbebe29' : '#fff',
      color: state.isSelected ? '#1a1a1a' : provided.color,
      '&:active': {
        backgroundColor: '#c0c0c0',
      },
      '&:hover': {
        backgroundColor: '#bfbebe29',
      },
    }),
  };

  return (
    <div className={styles.recipesFilterWrap}>
      <Select
        options={ingredientsOptions}
        placeholder="Ingredients"
        styles={customStyles}
        onChange={handleIngredientChange}
        className={styles.recipeFilterSelect}
      />

      <Select
        options={areasOptions}
        placeholder="Areas"
        styles={customStyles}
        onChange={handleAreaChange}
        className={styles.recipeFilterSelect}
      />
    </div>
  );
};
