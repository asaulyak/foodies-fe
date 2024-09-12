import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  signUpValidationSchema,
  signInValidationSchema,
} from '../../utils/validationSchemas.js';
import useErrorHandling from './hooks/useErrorHandling';
import useAuth from './hooks/useAuth';
import { Button } from '../Button/Button';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import styles from './SignForm.module.css';
import { ToastContainer, Zoom } from 'react-toastify';

const SignForm = ({ typeForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const validationSchema = useMemo(() => {
    return typeForm === 'signup'
      ? signUpValidationSchema
      : signInValidationSchema;
  }, [typeForm]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useErrorHandling(errors);
  const { onSubmit } = useAuth(typeForm, reset);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputFieldsContainer}>
          {typeForm === 'signup' && (
            <input
              className={styles.inputField}
              placeholder="Name*"
              type="text"
              {...register('name')}
            />
          )}
          <input
            className={styles.inputField}
            placeholder="Email*"
            type="email"
            {...register('email')}
          />
          <div className={styles.passwordContainer}>
            <input
              className={styles.inputField}
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
            />
            <button
              className={styles.btnEye}
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>
        </div>

        <Button type="submit" className={styles.button}>
          {typeForm === 'signup' ? 'Create Account' : 'Sign In'}
        </Button>
      </form>
      <ToastContainer transition={Zoom} />
    </>
  );
};

export default SignForm;
