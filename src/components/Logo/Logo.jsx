import css from './Logo.module.css';
import { NavLink } from 'react-router-dom';

export const Logo = () => (
  <div className={css.logo}>
    <NavLink to="/">foodies</NavLink>
  </div>
);
