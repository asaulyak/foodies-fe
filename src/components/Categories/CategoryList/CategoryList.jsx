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
          categories
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(category => <CategoryCard category={category} />)}
      </ul>
    </>
  );
  // return <>Category</>;
};
