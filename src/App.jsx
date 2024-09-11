import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout.jsx';
import { lazy } from 'react';
import Modal from 'react-modal';
import { Home } from './pages/Home/Home.jsx';
import { User } from './pages/User/User.jsx';

function App() {
  Modal.setAppElement('#modal-placeholder');

  // Add lazy loaded pages here
  // const CreateRecipe = lazy(() => import('./pages/CreateRecipe/CreateRecipe.jsx'));
  const RecipePage = lazy(() => import('./pages/RecipePage/RecipePage.jsx'));

  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route index element={<Home />} />
      {/*<Route path="/create" element={<CreateRecipe />} />*/}
      <Route path="/user/:id" element={<User />} />
      <Route path="recipe/:id" element={<RecipePage />} />

      <Route path="*" element={<Home />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
