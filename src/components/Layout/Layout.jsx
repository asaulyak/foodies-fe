import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader.jsx';
import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { Modal } from '../Modal/Modal.jsx';
import { SignModal } from '../SignModal/SignModal.jsx';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div>
          <Outlet />
        </div>
      </Suspense>
      <Footer />
      <Modal children={<SignModal />} />
    </>
  );
};
