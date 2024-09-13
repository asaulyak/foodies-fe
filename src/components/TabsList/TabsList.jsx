import { useEffect, useState } from 'react';
import { http } from '../../http';
import css from './TabsList.module.css';
import Pagination from '../Pagination/Pagination';
import { RecipePreview } from '../RecipePreview/RecipePreview';

export const TabsList = ({ isOwner, id }) => {
  const [activeTab, setActiveTab] = useState('recipes');
  const [page, setPage] = useState(1);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (isOwner) {
        if (activeTab === 'following' || activeTab === 'favorites') {
          const { data } = await http.get(`/users/${activeTab}/`);
          if (data) {
            setListItems(data.data);
          } else {
            setListItems([]);
          }
        } else {
          const { data } = await http.get(`/users/${activeTab}/${id}`);

          if (data) {
            setListItems(data.data);
          } else {
            setListItems([]);
          }
        }
      } else {
        const { data } = await http.get(`/users/${activeTab}/${id}`);

        if (data) {
          setListItems(data.data);
        } else {
          setListItems([]);
        }
      }
    };
    fetchData();
  }, [activeTab, page]);

  const handleTabClick = tab => {
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
        {listItems?.length === 0 ? (
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
              return;
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
