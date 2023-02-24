import { useSelector } from 'react-redux';

import styles from './PostCard.module.scss';

export const PostCard = () => {
  const posts = useSelector((state) => state.users.postsReducer);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className={styles.post_card}>
          <h4 className={styles.post_title}>{post.title}</h4>
          <p className={styles.post_body}>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};
