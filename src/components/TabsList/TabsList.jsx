import { useEffect, useState } from 'react';
import { http } from '../../http';
import css from './TabsList.module.css';
import Pagination from '../Pagination/Pagination';
import { RecipePreview } from '../RecipePreview/RecipePreview';
import { UserCard } from '../UserCard/UserCard';
import { Loader } from '../Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { SIZE } from '../../utils/constants';

export const TabsList = ({
  isOwner,
  id,
  totalRecipes,
  totalFollowers,
  totalFollowings,
  totalFavoritesRecipes,
}) => {
  const [activeTab, setActiveTab] = useState('recipes');
  const [listItems, setListItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();

  let page = searchParams.get('page') || 1;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let data;
        if (isOwner) {
          if (activeTab === 'following' || activeTab === 'favorites') {
            const response = await http.get(`/users/${activeTab}/`);
            data = response.data;
          } else {
            const response = await http.get(`/users/${activeTab}/${id}`, {
              params: {
                limit: 9,
                page: page,
              },
            });
            data = response.data;
          }
        } else {
          const response = await http.get(`/users/${activeTab}/${id}`);
          data = response.data;
        }

        if (data) {
          setListItems(data.data);
        } else {
          setListItems([]);
        }
      } catch (error) {
        toast.error(error.response.data.message);
        setListItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab, page, id, isOwner, totalFollowers]);
  useEffect(() => {
    setActiveTab('recipes');
  }, [id]);

  const handleTabClick = tab => {
    setListItems([]);
    setActiveTab(tab);
  };
  const tabsMap = {
    recipes: isOwner ? 'My Recipes' : 'Recipes',
    favorites: 'My Favorite',
    followers: 'Followers',
    following: 'Following',
    // other tabs go here
  };
  const handleDeleteRecipe = recipeId => {
    setListItems(prevItems => prevItems.filter(item => item.id !== recipeId));
  };
  const tabs = isOwner
    ? ['recipes', 'favorites', 'followers', 'following']
    : ['recipes', 'followers'];

  return (
    <div className={css.tabsContainer}>
      <div className={css.tabsContainerButton}>
        <div className={css.tabsList}>
          {tabs.map(tab => {
            return (
              <button
                key={tab}
                className={`${css.tabItem} ${activeTab === tab ? css.tabItemActive : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tabsMap[tab]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="list-items">
        {isLoading ? (
          <Loader size={SIZE.medium} />
        ) : listItems?.length === 0 ? (
          <p>
            Nothing has been added to your recipes list yet. Please browse our
            recipes and add your favorites for easy access in the future.
          </p>
        ) : (
          <ul>
            {listItems?.map(item => {
              if (activeTab === 'recipes' || activeTab === 'favorites') {
                return (
                  <RecipePreview
                    key={item.id}
                    {...item}
                    isOwner={isOwner}
                    onDelete={handleDeleteRecipe}
                    activeTab={activeTab}
                  ></RecipePreview>
                );
                //  RECIPES PREVIEW
              } else {
                return (
                  <UserCard
                    key={item.id}
                    {...item}
                    isOwner={isOwner}
                    onDelete={handleDeleteRecipe}
                    activeTab={activeTab}
                  ></UserCard>
                );
                //  FOLLOWERS FOLLOWING PREVIEW
              }
            })}
          </ul>
        )}
      </div>
      {/* PAGINATION */}
      <Pagination
        total={
          activeTab === 'recipes'
            ? totalRecipes
            : activeTab === 'favorites'
              ? totalFavoritesRecipes
              : activeTab === 'followers'
                ? totalFollowers
                : totalFollowings
        }
        limit={9}
      ></Pagination>
    </div>
  );
};
