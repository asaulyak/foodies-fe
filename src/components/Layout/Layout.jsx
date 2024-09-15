import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader.jsx';
import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { Modal } from '../Modal/Modal.jsx';
import { SignModal } from '../SignModal/SignModal.jsx';
import { SIZE } from '../../utils/constants.js';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader size={SIZE.large} />}>
        <div>
          <Outlet />
        </div>
      </Suspense>
      <Footer />
      <Modal children={<SignModal />} />
    </>
  );
};
