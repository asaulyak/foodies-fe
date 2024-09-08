import styles from './RecipeHero.module.css';

export const RecipeHero = ({ img, title }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.imgWrapper}>
        <img
          src={!img ? '' : img}
          alt={`Image ${title}`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              'https://placehold.co/400x400/BFBEBE/050505?text=Image not found';
          }}
        />
      </div>
    </section>
  );
};
