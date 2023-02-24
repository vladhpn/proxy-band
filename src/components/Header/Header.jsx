import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Link className={styles.link} to='/'>
        HOME
      </Link>
    </header>
  );
};
