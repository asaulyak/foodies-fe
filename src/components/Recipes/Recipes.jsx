import { Link } from 'react-router-dom';
import { RecipeList } from './RecipeList/RecipeList';
import { FaArrowLeft } from 'react-icons/fa';

export const Recipes = () => {
  return (
    <section>
      <div>
        <Link to="/">
          <span>
            Back <FaArrowLeft width="18" height="18" />
          </span>
        </Link>
        <h2>Category</h2>
        <p>
          Go on a taste journey, where every sip is a sophisticated creative
          chord, and every dessert is an expression of the most refined
          gastronomic desires.
        </p>
      </div>
      <div>
        <RecipeList />
      </div>
    </section>
  );
};
