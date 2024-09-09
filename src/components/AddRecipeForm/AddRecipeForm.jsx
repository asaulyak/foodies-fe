import { useState } from 'react';
import { Button } from '../Button/Button';
import css from './AddRecipeForm.module.css';
// import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { UploadFile } from '../UploadFile/UploadFile';

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
      <div className={css.form_file}>
        {/* register your input into the hook by invoking the "register" function */}
        <UploadFile></UploadFile>
      </div>

      <div className={css.form_info}></div>

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('exampleRequired', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
