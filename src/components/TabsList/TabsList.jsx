import { useEffect, useState } from 'react';
import { http } from '../../http';
import css from './TabsList.module.css';
import Pagination from '../Pagination/Pagination';

export const TabsList = ({ isOwner, id }) => {
  const [activeTab, setActiveTab] = useState(isOwner ? 'recipes' : 'info');
  const [page, setPage] = useState(1);
  const [listItems, setListItems] = useState([]);
  const tabsMap = {
    recipes: 'My Recipes',
    favorites: 'My Favorite',
    followers: 'Followers',
    following: 'Following',
    info: 'Recipes',
    // other tabs go here
  };
  const tabs = isOwner
    ? ['recipes', 'favorites', 'followers', 'following']
    : ['info', 'followers'];

  useEffect(() => {
    if (isOwner) {
      const fetchData = async () => {
        const { data } = await http.get(`/users/${activeTab}`, page);

        if (data) {
          setListItems(data.data);
        } else {
          setListItems([]);
        }
      };
      fetchData();
    } else {
      const fetchData = async () => {
        const { data } = await http.get(`/users/${id}/${activeTab}`);
        if (data) {
          setListItems(data.data);
        } else {
          setListItems([]);
        }
      };
      fetchData();
    }
  }, [activeTab, page]);

  const handleTabClick = tab => {
    setActiveTab(tab);
    setPage(1);
  };

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
