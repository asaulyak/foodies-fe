import React, { useCallback, memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Modal.module.css';
import { FiX } from 'react-icons/fi';
import { closeModal } from '../../redux/modal/modal.slice';
import clsx from 'clsx';

const Modal = memo(({ children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modal.isOpen);
  const [show, setShow] = useState(false);

  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  const handleEsc = useCallback(
    event => {
      if (event.key === 'Escape' && isOpen) {
        handleClose();
      }
    },
    [handleClose, isOpen]
  );

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      window.addEventListener('keydown', handleEsc);
    } else {
      const timer = setTimeout(() => {
        setShow(false);
      }, 300);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, handleEsc]);

  if (!isOpen && !show) {
    return null;
  }

  return (
    <div
      className={clsx(styles.backdrop, {
        [styles.close]: !isOpen && show,
      })}
      onClick={handleClose}
    >
      <div
        className={clsx(styles.modal, {
          [styles.close]: !isOpen && show,
        })}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}>
          <FiX size={24} />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
});

export default Modal;
