import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';
import { HiMiniArrowUpRight } from 'react-icons/hi2';

export const RecipeCard = ({ recipe }) => {
  const { _id, title, owner, description, thumb } = recipe;

  return (
    <>
      <li>
        <Link to={`/recipe/${_id}`}>
          <img src={thumb} alt={title} />
        </Link>
        <div>
          <SectionSubtitle text={title} />
          <p>{description}</p>
        </div>
        <div>
          <Link to={`/user/${owner._id}`}>
            <img src={owner.avatar} alt={`${owner.name} avatar`} />
          </Link>
          <ul>
            <li>
              <FaRegHeart width="18" height="18" />
            </li>
            <li>
              <Link to={`/recipe/${_id}`}>
                <HiMiniArrowUpRight width="18" height="18" />
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};
