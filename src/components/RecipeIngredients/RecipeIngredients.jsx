import css from './RecipeIngredients.module.css';

export const RecipeIngredients = ({ ingredients }) => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Ingredients</h3>
      <ul className={css.list}>
        {ingredients.map(ingredient => (
          <li key={ingredient.id} className={css.item}>
            <div className={css.imgWrapper}>
              <img
                className={css.img}
                src={ingredient.image}
                alt={`Ingredient ${ingredient.title}`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    'https://placehold.co/60x60/BFBEBE/050505?text=Image';
                }}
              />
            </div>
            <div className={css.textWrapper}>
              <p className={css.accentText}>{ingredient.name}</p>
              <p>{ingredient.quantity || 'quantity'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
