// import { useState } from 'react';
import css from './AddRecipeInput.module.css';
import clsx from 'clsx';

export const AddRecipeInput = ({
  disabled,
  type,
  className,
  parentClassName,
  value,
  name,
  placeholder,
  isCount = false,
}) => {
  return (
    <div className={parentClassName}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={clsx([css.input_form, className])}
      />
      <span className={'error-form'}>This field is required</span>
    </div>
  );
};
