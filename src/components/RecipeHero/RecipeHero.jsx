import styles from './RecipeHero.module.css';

export const RecipeHero = ({ image, title }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={!image ? '' : image}
          alt={`Image ${title}`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              'https://placehold.co/400x400/BFBEBE/050505?text=Image not found';
          }}
          loading="lazy"
        />
      </div>
    </section>
  );
};
