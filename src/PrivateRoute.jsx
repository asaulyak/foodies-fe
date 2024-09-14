import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading } from './redux/user/user.selectors.js';
import { Loader } from './components/Loader/Loader';

const PrivateRoute = ({ element, isAuthenticated }) => {
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <Loader></Loader>
  ) : isAuthenticated ? (
    element
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
