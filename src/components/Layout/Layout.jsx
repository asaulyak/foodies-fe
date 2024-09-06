import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader.jsx';
import css from './Layout.module.css';
import { Header } from '../Header/Header.jsx';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div className={css.container}>
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};
