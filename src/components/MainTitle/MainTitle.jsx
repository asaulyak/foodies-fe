import css from './MainTitle.module.css';
import clsx from 'clsx';
export const MainTitle = ({ children, className }) => {
  return <h2 className={clsx([css.main_title, className])}>{children}</h2>;
};
