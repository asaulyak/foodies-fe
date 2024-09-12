import css from './IngredientCard.module.css';

export const IngredientCard = ({ list, handleIngredientsDelete }) => {
  return (
    <ul className={css.list_ingredients}>
      {list.map(elem => {
        return (
          <li key={elem.id} className={css.card_ingredients}>
            <div className={css.image_item}>
              {' '}
              <img src={elem.image} alt={elem.name} />
            </div>{' '}
            <div className={css.card_info}>
              <div className={css.name}>
                <span>{elem.name}</span>
              </div>
              <span>{elem.quantity}</span>
            </div>
            <span
              className={css.button}
              onClick={() => handleIngredientsDelete(elem.id)}
            >
              x
            </span>
          </li>
        );
      })}
    </ul>
  );
};
