import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectUser } from '../../redux/user/user.selectors';

export default function PrivateRoute({ children, navigateTo = '/signin' }) {
  const location = useLocation();
  const isLoggedIn = useSelector(selectUser);

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return isLoggedIn ? children : <Navigate to={navigateTo} />;
}
