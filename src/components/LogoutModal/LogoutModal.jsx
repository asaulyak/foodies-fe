import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import styles from './LogoutModal.module.css';
import { closeModal } from '../../redux/modal/modal.slice';
import { logoutUser } from '../../redux/user/user.actions';
import { useNavigate } from 'react-router-dom';

export const LogoutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClose = () => dispatch(closeModal());

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
        Log out
      </Button>
      <Button onClick={onClose}>Cancel</Button>
    </div>
  );
};
