import { NavLink } from 'react-router-dom';
import styles from './PathInfo.module.css';

export const PathInfo = ({ currentPageName }) => (
  <div className={styles.pathInfo}>
    <NavLink className={styles.link} to="/">
      Home
    </NavLink>
    <span className={styles.delimiter}> / </span>
    <span className={styles.accentText}>{currentPageName}</span>
  </div>
);
