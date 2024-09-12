import { useEffect, useState } from 'react';
import { http } from '../../http';
import css from './TabsList.module.css';

export const TabsList = ({ isOwner, id }) => {
  const [activeTab, setActiveTab] = useState(isOwner ? 'recipes' : 'info');
  const [page, setPage] = useState(1);
  const [listItems, setListItems] = useState([]);

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
              {tab === 'recipes'
                ? 'My Recipes'
                : tab === 'favorites'
                  ? 'My Favorites'
                  : tab === 'followers'
                    ? 'Followers'
                    : tab === 'following'
                      ? 'Following'
                      : 'Recipes'}
            </button>
          ))}
        </div>
      </div>

      <div className="list-items">
        {console.log(listItems)}

        {listItems.length === 0 ? (
          <p>
            Nothing has been added to your recipes list yet. Please browse our
            recipes and add your favorites for easy access in the future.
          </p>
        ) : (
          listItems.map((item, index) => {
            console.log(item);

            return <div key={index}>{item.title}</div>;
          })
        )}
      </div>

      {/* PAGINATION */}
    </div>
  );
};
