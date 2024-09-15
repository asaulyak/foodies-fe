import { COLOR_CSS, SIZE } from '../../utils/constants';
import css from './Loader.module.css';

export const Loader = ({ color = COLOR_CSS.blackLight, size = SIZE.small }) => (
  <div className={css.container}>
    <span
      style={{ borderColor: color, width: `${size}px`, height: `${size}px` }}
      className={css.loader}
    ></span>
  </div>
);
