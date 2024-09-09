import css from './AddRipeTextarea.module.css';
import clsx from 'clsx';

export const AddRipeTextarea = ({
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
}) => {
  return (
    <div className={parentClassName}>
      <label htmlFor={labelFor} className={'form-label'}>
        {labelText}
      </label>
      <textarea
        type={type}
        name={name}
        placeholder={placeholder}
        className={clsx([css.textarea, className])}
      />
      <span className={'error-form'}>This field is required</span>
    </div>
  );
};
