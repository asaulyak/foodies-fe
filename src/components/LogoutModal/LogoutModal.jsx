import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import styles from './LogoutModal.module.css';
import { closeModal } from '../../redux/modal/modal.slice';
import { logoutUser } from '../../redux/user/user.actions';
import { useNavigate } from 'react-router-dom';
import { selectIsLoading } from '../../redux/user/user.selectors';
import { Loader } from '../Loader/Loader';
import { COLOR_CSS, SIZE } from '../../utils/constants';

export const LogoutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClose = () => dispatch(closeModal());
  const isLoadingLogout = useSelector(selectIsLoading);

  const handleLogout = e => {
    e.stopPropagation();
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        navigate('/');
        onClose();
      });
  };

  return (
    <div className={styles.container}>
      <Button onClick={handleLogout} className={styles.btnPrimary}>
        {isLoadingLogout ? <Loader size={SIZE.small} /> : 'Log out'}
      </Button>
      <Button onClick={onClose}>Cancel</Button>
    </div>
  );
};
