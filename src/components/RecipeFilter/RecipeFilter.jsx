import React from 'react';
import styles from './RecipeFilter.module.css';

export const RecipeFilter = ({
  ingredients = [], // Default to an empty array if undefined
  areas = [], // Default to an empty array
  selectedIngredientIds,
  selectedAreaId,
  handleSelectChange,
  isIngredientsLoading,
  isAreaLoading,
}) => {
  return (
    <div className={styles.recipesFilterWrap}>
      {/* Ingredients Filter */}
      {!isIngredientsLoading && (
        <select
          value={selectedIngredientIds}
          onChange={e => handleSelectChange('ingredient', e.target.value)}
          className={styles.recipeFilterSelect}
        >
          <option value="">Ingredients</option>
          {ingredients.map(ingredient => (
            <option key={ingredient.id} value={ingredient.id}>
              {ingredient.name}
            </option>
          ))}
        </select>
      )}

      {/* Areas Filter */}
      {!isAreaLoading && (
        <select
          value={selectedAreaId}
          onChange={e => handleSelectChange('area', e.target.value)}
          className={styles.recipeFilterSelect}
        >
          <option value="">Areas</option>
          {areas.map(area => (
            <option key={area.id} value={area.id}>
              {area.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
