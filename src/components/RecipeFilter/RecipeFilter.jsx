import React, { useEffect, useState } from 'react';
import styles from './RecipeFilter.module.css';
import Select from 'react-select';
import { useSearchParams } from 'react-router-dom';
import { http } from '../../http/index.js';
import { Loader } from '../Loader/Loader.jsx';

export const RecipeFilter = () => {
  const [ingredients, setIngredients] = useState([]);
  const [areas, setAreas] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState();
  const [currentArea, setCurrentArea] = useState();
  const [isIngredientsLoading, setIsIngredientsLoading] = useState();
  const [isAreasLoading, setIsAreasLoading] = useState();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsIngredientsLoading(true);
    setIsAreasLoading(true);

    const fetchIngredients = async () => {
      try {
        const { data: response } = await http.get('/ingredients');

        setIngredients(
          [
            {
              value: 'all',
              label: 'All',
            },
          ].concat(
            response.map(ingredient => ({
              value: ingredient.id,
              label: ingredient.name,
            }))
          )
        );
      } catch (e) {
        setIngredients([]);
      } finally {
        setIsIngredientsLoading(false);
      }
    };

    const fetchAreas = async () => {
      try {
        const { data: response } = await http.get('/areas');

        setAreas(
          [
            {
              value: 'all',
              label: 'All',
            },
          ].concat(
            response.map(area => ({
              value: area.id,
              label: area.name,
            }))
          )
        );
      } catch (e) {
        setAreas([]);
      } finally {
        setIsAreasLoading(false);
      }
    };

    fetchIngredients();
    fetchAreas();
  }, []);

  useEffect(() => {
    setCurrentIngredient(searchParams.get('ingredient') || 'all');
    setCurrentArea(searchParams.get('area') || 'all');
  }, [searchParams]);

  const handleIngredientChange = e => {
    searchParams.set('ingredient', e.value);

    setSearchParams(searchParams);
  };

  const handleAreaChange = e => {
    searchParams.set('area', e.value);

    setSearchParams(searchParams);
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

  return isIngredientsLoading || isAreasLoading ? (
    <Loader />
  ) : (
    <div className={styles.recipesFilterWrap}>
      <Select
        options={ingredients}
        placeholder="Ingredients"
        styles={customStyles}
        onChange={handleIngredientChange}
        className={styles.recipeFilterSelect}
        defaultValue={ingredients.find(
          option => option.value === currentIngredient
        )}
      />

      <Select
        options={areas}
        placeholder="Areas"
        styles={customStyles}
        onChange={handleAreaChange}
        className={styles.recipeFilterSelect}
        defaultValue={areas.find(option => option.value === currentArea)}
      />
    </div>
  );
};
