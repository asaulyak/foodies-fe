import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading } from './redux/user/user.selectors.js';
import { Loader } from './components/Loader/Loader';
import { COLOR_CSS, SIZE } from './utils/constants.js';

const PrivateRoute = ({ element, isAuthenticated }) => {
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <Loader size={SIZE.large} />
  ) : isAuthenticated ? (
    element
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
