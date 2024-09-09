import { useState } from 'react';
import { Button } from '../Button/Button';
import css from './AddRecipeForm.module.css';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { UploadFile } from '../UploadFile/UploadFile';
import { AddRecipeInput } from '../AddRecipeInput/AddRecipeInput';
import { AddRipeTextarea } from '../AddRipeTextarea/AddRipeTextarea';

export const AddRecipeForm = () => {
  // const [selectedImage, setSelectedImage] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);
  console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      {/* register your input into the hook by invoking the "register" function */}
      <UploadFile></UploadFile>
      <div className={css.form_info}>
        <AddRecipeInput
          type={'text'}
          placeholder={'The name of the recipe'}
          parentClassName={css.field_title}
          className={css.title}
        ></AddRecipeInput>
        <AddRipeTextarea
          type={'text'}
          placeholder={'Enter recipe'}
          labelFor={'recipe-preparation'}
          labelText={'Recipe Preparation'}
        ></AddRipeTextarea>
        <AddRecipeInput
          type={'text'}
          placeholder={'Enter quantity'}
        ></AddRecipeInput>
        <div className={css.wrapper_btn}>
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
