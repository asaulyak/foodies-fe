import css from './SubTitle.module.css';
import clsx from 'clsx';
export const SubTitle = ({ children, className }) => {
  return <p className={clsx([css.sub_title, className])}>{children}</p>;
};
