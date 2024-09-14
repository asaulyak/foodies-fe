import { useEffect, useState } from 'react';
import { http } from '../../http';
import css from './TabsList.module.css';
import Pagination from '../Pagination/Pagination';
import { RecipePreview } from '../RecipePreview/RecipePreview';
import { UserCard } from '../UserCard/UserCard';
import { selectIsLoading } from '../../redux/user/user.selectors';
import { Loader } from '../Loader/Loader';

export const TabsList = ({ isOwner, id }) => {
  const [activeTab, setActiveTab] = useState('recipes');
  const [page, setPage] = useState(1);
  const [listItems, setListItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
            const response = await http.get(`/users/${activeTab}/${id}`);
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
        console.error('Error fetching data:', error);
        setListItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab, page, id, isOwner]);
  useEffect(() => {
    setActiveTab('recipes');
  }, [id]);

  const handleTabClick = tab => {
    setListItems([]);
    setActiveTab(tab);
    setPage(1);
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
          <Loader />
        ) : listItems?.length === 0 ? (
          <p>
            Nothing has been added to your recipes list yet. Please browse our
            recipes and add your favorites for easy access in the future.
          </p>
        ) : (
          listItems?.map(item => {
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
          })
        )}
      </div>

      {/* PAGINATION */}
      <Pagination></Pagination>
    </div>
  );
};
