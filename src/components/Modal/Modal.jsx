import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../redux/users';

import styles from './Modal.module.scss';

export const Modal = ({ isOpen, children }) => {
  const dispatch = useDispatch();

  const modalState = useSelector((state) => state.users.modalReduser);

  const onClose = useCallback(() => {
    dispatch(action.modalAction(false));
  }, [dispatch]);

  if (!modalState) {
    return null;
  }

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        <button className={styles.close_button} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
