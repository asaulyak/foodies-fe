import css from './AddRecipeTextarea.module.css';
import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';

export const AddRecipeTextarea = ({
  disabled,
  type,
  className,
  parentClassName,
  value,
  name,
  placeholder,
  isCount = false,
  labelFor,
  labelText,
  id,
  maxLength,
}) => {
  const [text, setText] = useState('');
  const [hasTyped, setHasTyped] = useState(false);
  const textareaRef = useRef(null);

  const handleInput = e => {
    setText(e.target.value);
    if (e.target.value.length > 0 && !hasTyped) {
      setHasTyped(true);
    }
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [text]);

  return (
    <div className={parentClassName}>
      <label htmlFor={labelFor} className={'form-label'}>
        {labelText}
      </label>
      <div className={css.wrapper_textarea}>
        <textarea
          ref={textareaRef}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className={clsx([css.textarea, className])}
          onChange={handleInput}
          rows={1}
          maxLength={maxLength}
        />
        <div className={css.count}>
          {' '}
          <span className={clsx({ [css.count_bold]: hasTyped })}>
            {text.length}
          </span>
          /{maxLength}
        </div>
      </div>
      <span className={'error-form'}>This field is required</span>
    </div>
  );
};
