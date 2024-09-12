import React, { useState } from 'react';
import styles from './SignModal.module.css';
import SignForm from '../SignForm/SignForm';

const SignModal = () => {
  const [typeForm, setTypeForm] = useState('signup');

  const toggleType = () => {
    setTypeForm(prevType => (prevType === 'signup' ? 'signin' : 'signup'));
  };

  return (
    <>
      <h2 className={styles.title}>
        {typeForm === 'signup' ? 'Sign up' : 'Sign in'}
      </h2>
      <SignForm typeForm={typeForm} />
      <p className={styles.bottomText}>
        {typeForm === 'signup' ? (
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
    </>
  );
};

export default SignModal;
