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
  id,
  onChange,
  isCount = false,
}) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className={parentClassName}>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={clsx([css.input_form, className])}
        onChange={handleChange}
      />
      <span className={'error-form'}>This field is required</span>
    </div>
  );
};
