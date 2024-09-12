import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesList } from '../../redux/categories/categories.actions';
import { fetchIngredientsList } from '../../redux/ingredients/ingredients.actions';
import { fetchAreasList } from '../../redux/areas/areas.actions';

import { Button } from '../Button/Button';
import css from './AddRecipeForm.module.css';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UploadFile } from '../UploadFile/UploadFile';
import { AddRecipeInput } from '../AddRecipeInput/AddRecipeInput';
import { AddRecipeTextarea } from '../AddRecipeTextarea/AddRecipeTextarea';
import Select from 'react-select';
import { categoriesList } from '../../redux/categories/categories.selectors';
import { ingredientsList } from '../../redux/ingredients/ingredients.selectors';
import { areasList } from '../../redux/areas/areas.selectors';
import { IngredientCard } from '../IngredientCard/IngredientCard';

import { http } from '../../http/index';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
const schema = yup.object().shape({
  image: yup
    .mixed()
    .test('required', 'Image is required', value => {
      return value && value.length > 0;
    })
    .test('fileSize', 'File size is too large', value => {
      return value && value[0] && value[0].size <= 5000000;
    }),
  title: yup.string().required('The title field is required'),
  description: yup.string().required('The description field is required'),
  preparation: yup.string().required('The preparation field is required'),
  category: yup
    .object()
    .shape({
      value: yup.string().required('Category is required'),
      label: yup.string(),
    })
    .nullable()
    .required('Category is required'),
  area: yup
    .object()
    .shape({
      value: yup.string().required('Area is required'),
      label: yup.string(),
    })
    .nullable()
    .required('Area is required'),
  time: yup
    .number()
    .min(1, 'Time needs to be over than 0')
    .required('Time is required'),
  ingredients: yup
    .array()
    .min(1, 'At least one ingredient is required')
    .required('Ingredients are required'),
});

export const AddRecipeForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      time: 0,
      ingredients: [],
    },
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionIngredients, setSelectedOptionIngredients] =
    useState(null);
  const [selectedOptionAreas, setSelectedOptionAreas] = useState(null);
  const [time, setTime] = useState(0);
  const [selectedListIngredients, setSelectedListIngredients] = useState([]);
  const [ingredientsQuantity, setIngredientsQuantity] = useState(null);
  const [errorsQuantity, setErrorsQuantity] = useState({});
  const [errorIngredientsSelect, setErrorIngredientsSelect] = useState(false);

  const dispatch = useDispatch();
  const categories = useSelector(categoriesList);
  const ingredients = useSelector(ingredientsList);
  const areas = useSelector(areasList);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategoriesList());
    dispatch(fetchIngredientsList());
    dispatch(fetchAreasList());
  }, [dispatch]);

  const categoriesOptions = categories?.map(category => ({
    value: category.id,
    label: category.name,
  }));

  const ingredientsOptions = ingredients?.map(ingredient => ({
    value: ingredient.id,
    label: ingredient.name,
  }));

  const areasOptions = areas?.map(area => ({
    value: area.id,
    label: area.name,
  }));

  const onSubmit = async data => {
    const {
      area,
      category,
      description,
      image,
      ingredients,
      preparation,
      time,
      title,
    } = data;
    const file = image[0];
    const formData = new FormData();
    formData.append('thumb', file);
    const ingredientsFormData = ingredients.map(ingredient => ({
      id: ingredient.id,
      quantity: ingredient.quantity,
    }));
    try {
      const imageUrl = await http.post('/recipes/thumb', formData, {
        // TODO: remove Authorization token
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const addRecipeData = {
        title,
        instructions: preparation,
        description,
        thumb: imageUrl.data,
        time: time.toString(),
        categoryId: category.value,
        areaId: area.value,
        ingredients: ingredientsFormData,
      };
      const addRecipeResponse = await http.post('/recipes', addRecipeData, {});
      // TODO: navigate to UserPage
      // navigate('/user');
    } catch (error) {
      // TODO: show errors to user
      console.log(error);
    }
  };

  const handleIncrease = () => {
    setTime(prevTime => prevTime + 10);
  };

  const handleDecrease = () => {
    if (time > 1) {
      setTime(prevTime => prevTime - 10);
    }
  };

  const handleSelectIngredients = () => {
    !ingredientsQuantity
      ? setErrorsQuantity({
          message: 'The quantity field is required',
        })
      : setErrorsQuantity({});
    !selectedOptionIngredients
      ? setErrorIngredientsSelect(true)
      : setErrorIngredientsSelect(false);
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
      setValue('ingredients', [
        ...getValues('ingredients'),
        { ...findIngredient, quantity: ingredientsQuantity },
      ]);
    }
  };

  const handleIngredientsDelete = id => {
    const updatedList = selectedListIngredients.filter(item => item.id !== id);
    setSelectedListIngredients(prev => prev.filter(el => el.id !== id));
    setValue('ingredients', updatedList);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? '#bfbebe29'
        : provided.backgroundColor,
      color: state.isSelected ? '#1a1a1a' : provided.color,
    }),
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <UploadFile
        name="image"
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        register={register}
        errors={errors.image}
      ></UploadFile>

      <div className={css.form_info}>
        <AddRecipeInput
          type={'text'}
          id={''}
          placeholder={'The name of the recipe'}
          parentClassName={css.field_title}
          className={css.title}
          register={register}
          error={errors.title}
          name={'title'}
        ></AddRecipeInput>
        <AddRecipeTextarea
          name={'description'}
          type={'text'}
          id={'description'}
          placeholder={'Enter a description of the dish'}
          maxLength={200}
          register={register}
          error={errors.description}
        ></AddRecipeTextarea>
        <div className={css.wrapper}>
          <div className={css.wrap_field}>
            <div className="field">
              <p className="form-label">category</p>
              <Controller
                name="category"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={categoriesOptions}
                    placeholder="Select a category"
                    onChange={selectedOption => field.onChange(selectedOption)}
                    styles={customStyles}
                  />
                )}
              />
              {errors.category && (
                <span className={'error-form'}>{errors.category.message}</span>
              )}
            </div>
            <div className={css.cooking_time}>
              <h3 className="form-label">COOKING TIME</h3>
              <div className={css.cooking_controls}>
                <Controller
                  name="time"
                  control={control}
                  render={({ field }) => (
                    <>
                      <button
                        type="button"
                        className={css.circle_button}
                        onClick={() => {
                          handleDecrease();
                          field.onChange(time - 10);
                        }}
                        disabled={time <= 0}
                      >
                        <Icon
                          iconId={'minus'}
                          width={24}
                          stroke={'#050505'}
                          height={24}
                        ></Icon>
                      </button>

                      <span className={css.time_display}>{time} min</span>
                      <button
                        type="button"
                        className={css.circle_button}
                        onClick={() => {
                          handleIncrease();
                          field.onChange(time + 10);
                        }}
                      >
                        <Icon
                          iconId={'plus'}
                          width={24}
                          stroke={'#050505'}
                          height={24}
                        ></Icon>
                      </button>
                    </>
                  )}
                />
              </div>
              {errors.time && (
                <span className={'error-form'}>{errors.time.message}</span>
              )}
            </div>
          </div>
          <div className={css.wrap_field}>
            <div className="field">
              <p className="form-label">Area</p>
              <Controller
                name="area"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={areasOptions}
                    placeholder="Select an area"
                    styles={customStyles}
                    onChange={setSelectedOptionAreas =>
                      field.onChange(setSelectedOptionAreas)
                    }
                  />
                )}
              />
              {errors.area && (
                <span className={'error-form'}>{errors.area.message}</span>
              )}
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
                  styles={customStyles}
                />
                {errorIngredientsSelect && (
                  <span className={'error-form'}>Select an ingredient</span>
                )}
              </div>
              <AddRecipeInput
                type={'text'}
                name="quantity"
                placeholder={'Enter quantity'}
                onChange={setIngredientsQuantity}
                error={errorsQuantity}
              ></AddRecipeInput>
            </div>
            <button
              type="button"
              className={css.add_ingredients}
              onClick={handleSelectIngredients}
            >
              Add ingredient
              <Icon
                iconId={'plus'}
                width={22}
                stroke={'#050505'}
                height={22}
              ></Icon>
            </button>
            <Controller
              name="ingredients"
              control={control}
              render={({ field }) => (
                <>
                  {errors.ingredients && (
                    <span className={'error-form'}>
                      {errors.ingredients.message}
                    </span>
                  )}
                  <IngredientCard
                    list={selectedListIngredients}
                    handleIngredientsDelete={handleIngredientsDelete}
                  />
                </>
              )}
            />
          </div>
        </div>
        <AddRecipeTextarea
          type={'text'}
          name={'preparation'}
          id={'recipe-preparation'}
          placeholder={'Enter recipe'}
          labelFor={'recipe-preparation'}
          labelText={'Recipe Preparation'}
          maxLength={200}
          parentClassName={css.textarea_bottom}
          className={css.input_bottom}
          register={register}
          error={errors.preparation}
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
    </form>
  );
};
