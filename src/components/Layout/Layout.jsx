import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader.jsx';
import { Header } from '../Header/Header.jsx';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div>
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};
