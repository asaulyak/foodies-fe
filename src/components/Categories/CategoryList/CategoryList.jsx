import { useSelector } from 'react-redux';
import { fetchCategories } from '../../../redux/categories/categories.selectors';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import styles from './CategoryList.module.css';

export const CategoryList = () => {
  const categories = useSelector(fetchCategories);

  return (
    <>
      <ul className={styles.category_list}>
        {categories &&
          categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
      </ul>
    </>
  );
};
