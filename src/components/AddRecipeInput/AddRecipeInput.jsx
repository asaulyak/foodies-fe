// import { useState } from 'react';
import css from './AddRecipeInput.module.css';
import clsx from 'clsx';

export const AddRecipeInput = ({
  type,
  className,
  parentClassName,
  value,
  name,
  placeholder,
  id,
  onChange,
  disabled = false,
  register = () => {},
  error,
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
        disabled={disabled}
        {...register(name)}
      />
      {error && <span className={'error-form'}>{error.message}</span>}
    </div>
  );
};
