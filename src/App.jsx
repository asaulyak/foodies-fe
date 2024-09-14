import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout.jsx';

import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import { Home } from './pages/Home/Home.jsx';
import { User } from './pages/User/User.jsx';
import { Loader } from './components/Loader/Loader.jsx';

import { selectUser } from './redux/user/user.selectors.js';
import PrivateRoute from './PrivateRoute.jsx';
import { ToastContainer } from 'react-toastify';
import { Categories } from './components/Categories/Categories.jsx';
import { Recipes } from './components/Recipes/Recipes.jsx';

function App() {
  Modal.setAppElement('#modal-placeholder');
  const isAuthenticated = useSelector(selectUser);
  // Add lazy loaded pages here

  // -- Attempting to add lazy loading to the components however this results in an error
  // ---- Cannot convert object to primitive value
  //
  // const Categories = lazy(
  //   () => import('./components/Categories/Categories.jsx')
  // );
  // const Recipes = lazy(() => import('./components/Recipes/Recipes.jsx'));

  const RecipePage = lazy(() => import('./pages/RecipePage/RecipePage.jsx'));
  const AddRecipe = lazy(() => import('./pages/AddRecipe/AddRecipe.jsx'));

  return (
    <>
      <Suspense fallback={<Loader full />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<Home />}>
              <Route path="" element={<Categories />} />
              <Route path="categories/:id" element={<Recipes />} />
            </Route>

            <Route path="/user/:id" element={<User />} />
            <Route path="recipe/:id" element={<RecipePage />} />
            <Route
              path="/recipe/add"
              element={
                <PrivateRoute
                  element={<AddRecipe />}
                  isAuthenticated={isAuthenticated}
                />
              }
            />

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Suspense>
    </>
  );
}

export default App;
