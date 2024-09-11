import styles from './CategoryCard.module.css';
import { HiMiniArrowUpRight } from 'react-icons/hi2';

export const CategoryCard = ({ category }) => {
  const { id, name, description } = category;

  console.log(`./../../../../public/categoryImages/${name}.png`);
  return (
    <li key={id} className={styles.category_card}>
      <img src={`./../../../../public/categoryImages/${name}.png`} alt={name} />
      <h3>{name}</h3>
      <HiMiniArrowUpRight />
    </li>
  );
};
