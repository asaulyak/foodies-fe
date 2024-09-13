import { useEffect, useState } from 'react';
import { http } from '../../http';
import css from './TabsList.module.css';
import Pagination from '../Pagination/Pagination';

export const TabsList = ({ isOwner, id }) => {
  const [activeTab, setActiveTab] = useState(isOwner ? 'recipes' : 'info');
  const [page, setPage] = useState(1);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    console.log(isOwner);

    if (isOwner) {
      const fetchData = async () => {
        console.log(activeTab);

        if (activeTab === 'following' || activeTab === 'favorites') {
          const { data } = await http.get(`/users/${activeTab}/${id}`);
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
      };
      fetchData();
    }
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
  const tabs = isOwner
    ? ['recipes', 'favorites', 'followers', 'following']
    : ['recipes', 'followers'];

  return (
    <div className={css.tabsContainer}>
      <div className={css.tabsContainerButton}>
        <div className={css.tabsList}>
          {tabs.map(tab => (
            <button
              key={tab}
              className={`${css.tabItem} ${activeTab === tab ? css.tabItemActive : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tabsMap[tab]}
            </button>
          ))}
        </div>
      </div>

      <div className="list-items">
        {listItems.length === 0 ? (
          <p>
            Nothing has been added to your recipes list yet. Please browse our
            recipes and add your favorites for easy access in the future.
          </p>
        ) : (
          listItems.map(item => {
            if (
              activeTab === 'recipes' ||
              activeTab === 'favorites' ||
              activeTab === 'info'
            ) {
              return;
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
