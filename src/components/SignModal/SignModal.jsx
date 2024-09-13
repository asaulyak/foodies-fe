import React from 'react';
import styles from './SignModal.module.css';
import { SignForm } from '../SignForm/SignForm.jsx';
import { LogoutModal } from '../LogoutModal/LogoutModal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalType } from '../../redux/modal/modal.selectors.js';
import { switchTypeModal } from '../../redux/modal/modal.slice';
import { MODAL_TYPE } from '../../utils/constants.js';

export const SignModal = () => {
  const dispatch = useDispatch();
  const modalType = useSelector(selectModalType);
  const { signup, signin, logout } = MODAL_TYPE;

  const toggleType = () => {
    const newType = modalType === signup ? signin : signup;
    dispatch(switchTypeModal(newType));
  };

  // Modal Title
  const renderTitle = () => {
    if (modalType === logout) {
      return (
        <>
          <h2 className={styles.titleLogout}>Are you logging out?</h2>
          <p className={styles.logoutText}>
            You can always log back in at any time.
          </p>
        </>
      );
    }
    return (
      <h2 className={styles.title}>
        {modalType === signup ? 'Sign up' : 'Sign in'}
      </h2>
    );
  };

  // Content modal
  const renderContent = () => {
    return modalType === logout ? (
      <LogoutModal />
    ) : (
      <SignForm modalType={modalType} />
    );
  };

  // switch modal
  const renderSwitchText = () => {
    if (modalType === logout) return null;
    return (
      <p className={styles.bottomText}>
        {modalType === signup ? (
          <>
            I already have an account?{' '}
            <span className={styles.nameForm} onClick={toggleType}>
              Sign in
            </span>
          </>
        ) : (
          <>
            Don't have an account?{' '}
            <span className={styles.nameForm} onClick={toggleType}>
              Create an account
            </span>
          </>
        )}
      </p>
    );
  };

  return (
    <>
      {renderTitle()}
      {renderContent()}
      {renderSwitchText()}
    </>
  );
};
