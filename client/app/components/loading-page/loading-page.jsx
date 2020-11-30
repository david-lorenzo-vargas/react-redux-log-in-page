import React from 'react';
import Spinner from '../spinner';
import Logo from '../logo';
import Text from '../text';
import styles from './loading-page.scss';

const LoadingPage = () => (
  <div className={styles.loading}>
    <div className={styles.loading__item}>
      <div className={styles.loading__logo}>
        <Logo
          size="medium"
          position="center"
        />
      </div>
      <div className={styles.loading__text}>
        <Text
          text="blue vera"
          bold="bold"
          theme="blue"
          size="extra-big"
          type="uppercase"
          center="center"
        />
      </div>
      <div className={styles.loading__spinner}>
        <Spinner />
      </div>
    </div>

  </div>
);

export default LoadingPage;
