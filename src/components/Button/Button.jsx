import css from './Button.module.css';
import clsx from 'clsx';
export const Button = ({
  text,
  onClick,
  variant,
  style,
  disabled,
  type = 'button',
  styles,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      style={style}
      className={clsx([css.button, css[variant], styles])}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
