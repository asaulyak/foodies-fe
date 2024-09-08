import styles from './RecipeIngredients.module.css';

export const RecipeIngredients = ({ ingredients }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Ingredients</h2>
      <ul className={styles.list}>
        {ingredients.map(ingredient => (
          <li key={ingredient.id} className={styles.item}>
            <div className={styles.imgWrapper}>
              <img
                className={styles.img}
                src={ingredient.image}
                alt={`Image ${ingredient.title}`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    'https://placehold.co/60x60/BFBEBE/050505?text=Image';
                }}
              />
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.accentText}>{ingredient.name}</p>
              <p>{ingredient.quantity || 'quantity'}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
