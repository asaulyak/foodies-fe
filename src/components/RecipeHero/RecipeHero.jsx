import css from './RecipeHero.module.css';

export const RecipeHero = ({ image, title }) => {
  return (
    <div className={css.hero}>
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={!image ? '' : image}
          alt={`Dish ${title}`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              'https://placehold.co/400x400/BFBEBE/050505?text=Image not found';
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
};
