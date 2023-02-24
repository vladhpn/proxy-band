import ClipLoader from 'react-spinners/ClipLoader';

import styles from './Spinner.module.scss'

const override = {
  display: 'block',
  margin: '0 auto',
};

export const Spinner = () => {
  return (
    <div className={styles.container}>
      <ClipLoader
        color={'#a855f7'}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};