import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { operation } from '../../redux/users';
import { WithSuspense } from '../WithSuspence/WithSuspence';

import styles from './Albums.module.scss';

export const Albums = () => {
  const dispatch = useDispatch();
  
  const albums = useSelector((state) => state.users.albumsReducer);
  const id = useSelector((state) => state.users.saveIdReduser);

  useEffect(() => {
    dispatch(operation.fetchAlbums(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>ALBUMS</h1>

      <WithSuspense>

      <ul className={styles.list}>
        {albums.map((album) => (
          <li key={album.id} className={styles.item}>
            <img
              src={`https://picsum.photos/50?random=${album.id}`}
              alt=''
              className={styles.thumbnail}
            />
            <h4 className={styles.title}>{album.title}</h4>
          </li>
        ))}
        </ul>
        </WithSuspense>
    </div>
  );
};
