import css from './AddRecipeTextarea.module.css';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

export const AddRecipeTextarea = ({
  disabled = false,
  type,
  className,
  parentClassName,
  value,
  name,
  placeholder,
  labelFor,
  labelText,
  id,
  maxLength,
  register,
  error,
  setText,
}) => {
  const [hasTyped, setHasTyped] = useState(false);

  const handleInput = e => {
    const textarea = e.target;
    setText(e.target.value);
    if (e.target.value.length > 0 && !hasTyped) {
      setHasTyped(true);
    }
    if (textarea) {
      adjustTextareaHeight(textarea);
    }
  };

  const adjustTextareaHeight = textarea => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    const textarea = document.getElementById(id);
    if (textarea) {
      adjustTextareaHeight(textarea);
    }
  }, [value, id]);

  return (
    <div className={parentClassName}>
      <label htmlFor={labelFor} className={'form-label'}>
        {labelText}
      </label>
      <div className={css.wrapper_textarea}>
        <textarea
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className={clsx([css.textarea, className])}
          rows={1}
          value={value}
          maxLength={maxLength}
          disabled={disabled}
          {...register(name, {
            onChange: handleInput,
          })}
        />
        <div className={css.count}>
          <span className={clsx({ [css.count_bold]: hasTyped && value })}>
            {value.length}
          </span>
          /{maxLength}
        </div>
      </div>
      {error && <span className={'error-form'}>{error.message}</span>}
    </div>
  );
};
