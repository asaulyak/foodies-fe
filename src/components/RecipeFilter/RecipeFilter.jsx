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

export const RecipeFilter = ({ handleSelectChange }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector(selectIngredients);
  const areas = useSelector(selectAreas);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchAreas());
  }, [dispatch]);

  const handleIngredientChange = e => {
    console.log(e.target.value);
    dispatch(setSelectedIngredientAction(e.target.value));
  };

  const handleAreaChange = e => {
    console.log(e.target.value);
    dispatch(setSelectedAreaAction(e.target.value));
  };

  return (
    <div className={styles.recipesFilterWrap}>
      <select
        onChange={handleIngredientChange}
        className={styles.recipeFilterSelect}
      >
        <option value="">Ingredients</option>
        {ingredients.map(ingredient => (
          <option key={ingredient.id} value={ingredient.id}>
            {ingredient.name}
          </option>
        ))}
      </select>

      <select onChange={handleAreaChange} className={styles.recipeFilterSelect}>
        <option value="">Areas</option>
        {areas.map(area => (
          <option key={area.id} value={area.id}>
            {area.name}
          </option>
        ))}
      </select>
    </div>
  );
};
