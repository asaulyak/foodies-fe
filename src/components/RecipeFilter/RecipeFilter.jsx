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

export const RecipeFilter = ({ handleSelectChange }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector(selectIngredients);
  const areas = useSelector(selectAreas);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const [selectedIngredient, setSelectedIngredient] = React.useState('');
  const [selectedArea, setSelectedArea] = React.useState('');

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchAreas());
  }, [dispatch]);

  console.log('Ingredients:', ingredients);
  console.log('Areas:', areas);

  const handleIngredientChange = e => {
    setSelectedIngredient(e.target.value);
    handleSelectChange('ingredient', e.target.value);
  };

  const handleAreaChange = e => {
    setSelectedArea(e.target.value);
    handleSelectChange('area', e.target.value);
  };

  return (
    <div className={styles.recipesFilterWrap}>
      {/* Ingredients Filter */}
      <select
        value={selectedIngredient}
        onChange={handleIngredientChange}
        className={styles.recipeFilterSelect}
      >
        <option value="">Ingredients</option>
        {ingredients.map(ingredient => (
          <option key={ingredient.id} value={ingredient.name}>
            {ingredient.name}
          </option>
        ))}
      </select>

      {/* Areas Filter */}
      <select
        value={selectedArea}
        onChange={handleAreaChange}
        className={styles.recipeFilterSelect}
      >
        <option value="">Areas</option>
        {areas.map(area => (
          <option key={area.id} value={area.name}>
            {area.name}
          </option>
        ))}
      </select>
    </div>
  );
};
