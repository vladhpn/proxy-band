import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { action } from '../../redux/users';

import styles from './UserCard.module.scss';

export const UserCard = () => {
  const getUsers = useSelector((state) => state.users.usersReducer);

  const dispatch = useDispatch();

  const handleOpenModal = useCallback(
    (id) => {
      dispatch(action.saveIdAction(id));
      dispatch(action.modalAction(true));
    },
    [dispatch]
  );

  return (
    <ul className={styles.card_container}>
      {getUsers.map((user) => (
        <li key={user.id} className={styles.user_card}>
          <h2 className={styles.user_name}>{user.name}</h2>
          <p className={styles.user_info}> {user.phone}</p>

          <p className={styles.user_info}>{user.email}</p>

          <p className={styles.user_info}>{user.company.name}</p>
          <p className={styles.user_info}>{user.address.city}</p>
          <div className={styles.user_buttons}>
            <a className={styles.btn} href={`/posts/${user.id}`}>
              Posts
            </a>
            <button
              className={styles.btn}
              onClick={() => handleOpenModal(user.id)}
            >
              Albums
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
