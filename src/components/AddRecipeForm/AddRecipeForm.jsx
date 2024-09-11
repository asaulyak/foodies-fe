import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesList } from '../../redux/categories/categories.actions';
import { fetchIngredientsList } from '../../redux/ingredients/ingredients.actions';

import { Button } from '../Button/Button';
import css from './AddRecipeForm.module.css';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { UploadFile } from '../UploadFile/UploadFile';
import { AddRecipeInput } from '../AddRecipeInput/AddRecipeInput';
import { AddRecipeTextarea } from '../AddRecipeTextarea/AddRecipeTextarea';
import Select from 'react-select';
import {
  categoriesList,
  listIsLoading,
  listError,
} from '../../redux/categories/categories.selectors';
import {
  ingredientsList,
  ingredientsListIsLoading,
  ingredientsListError,
} from '../../redux/ingredients/ingredients.selectors';

export const AddRecipeForm = () => {
  // const [selectedImage, setSelectedImage] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const categories = useSelector(categoriesList);
  const ingredients = useSelector(ingredientsList);

  const isLoading = useSelector(listIsLoading);
  const error = useSelector(listError);

  const categoriesOptions = categories?.map(category => ({
    value: category.id,
    label: category.name,
  }));

  const ingredientsOptions = ingredients?.map(ingredient => ({
    value: ingredient.id,
    label: ingredient.name,
  }));

  useEffect(() => {
    dispatch(fetchCategoriesList());
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedOptionIngredients, setSelectedOptionIngredients] =
    useState(null);
  const [time, setTime] = useState(0);
  const [selectedListIngredients, setSelectedListIngredients] = useState([]);
  const [ingredientsQuantity, setIngredientsQuantity] = useState(null);

  const onSubmit = data => console.log(data);
  // console.log(watch('example')); // watch input value by passing the name of it

  const handleIncrease = () => {
    setTime(prevTime => prevTime + 10);
  };

  const handleDecrease = () => {
    if (time > 1) {
      setTime(prevTime => prevTime - 10);
    }
  };

  const handleSelectIngredients = () => {
    if (
      selectedOptionIngredients &&
      ingredientsQuantity &&
      selectedListIngredients.findIndex(
        el => el.id === selectedOptionIngredients.value
      ) === -1
    ) {
      const findIngredient = ingredients.find(
        el => el.id === selectedOptionIngredients.value
      );
      setSelectedListIngredients([
        ...selectedListIngredients,
        { ...findIngredient, quantity: ingredientsQuantity },
      ]);
    }
  };

  const handleIngredientsDelete = id => {
    setSelectedListIngredients(prev => prev.filter(el => el.id !== id));
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      {/* register your input into the hook by invoking the "register" function */}
      <UploadFile></UploadFile>
      <div className={css.form_info}>
        <AddRecipeInput
          type={'text'}
          id={''}
          placeholder={'The name of the recipe'}
          parentClassName={css.field_title}
          className={css.title}
        ></AddRecipeInput>
        <AddRecipeTextarea
          type={'text'}
          id={'description'}
          placeholder={'Enter a description of the dish'}
          maxLength={200}
        ></AddRecipeTextarea>

        <div className={css.wrapper}>
          <div className={css.wrap_field}>
            <div className="field">
              <p className="form-label">category</p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={categoriesOptions}
                placeholder="Select a category"
              />
            </div>
            <div className={css.cooking_time}>
              <h3 className="form-label">COOKING TIME</h3>
              <div className={css.cooking_controls}>
                <button className={css.circle_button} onClick={handleDecrease}>
                  -
                </button>
                <span className={css.time_display}>{time} min</span>
                <button className={css.circle_button} onClick={handleIncrease}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={css.wrap_field}>
              <div className="field">
                <p className="form-label">Ingredients</p>
                <Select
                  defaultValue={selectedOptionIngredients}
                  onChange={setSelectedOptionIngredients}
                  options={ingredientsOptions}
                  placeholder="Add the ingredient"
                />
              </div>
              <AddRecipeInput
                type={'text'}
                placeholder={'Enter quantity'}
                onChange={setIngredientsQuantity}
              ></AddRecipeInput>
            </div>
            <button
              type="button"
              className={css.add_ingredients}
              onClick={handleSelectIngredients}
            >
              Add ingredient
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 4.58325V17.4166"
                  stroke="#050505"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.58301 11H17.4163"
                  stroke="#050505"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <ul>
              {selectedListIngredients.map(elem => {
                return (
                  <li key={elem.id}>
                    <img src={elem.image} alt={elem.name} />
                    <span>{elem.name}</span>
                    <span>{elem.quantity}</span>
                    <span onClick={() => handleIngredientsDelete(elem.id)}>
                      x
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <AddRecipeTextarea
          type={'text'}
          id={'recipe-preparation'}
          placeholder={'Enter recipe'}
          labelFor={'recipe-preparation'}
          labelText={'Recipe Preparation'}
          maxLength={200}
          parentClassName={css.textarea_bottom}
          className={css.input_bottom}
        ></AddRecipeTextarea>

        <div className={css.wrap_btn}>
          <button className={css.circle_button}>+</button>

          <Button
            type="submit"
            variant={'color'}
            children={'Publish'}
            className={css.form_btn}
          ></Button>
        </div>
      </div>
      {/* <div className={css.form_info}></div> */}

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register('exampleRequired', { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      {/* <input type="submit" /> */}
    </form>
  );
};
