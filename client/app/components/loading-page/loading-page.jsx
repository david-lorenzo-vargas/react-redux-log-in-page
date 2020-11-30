import React from 'react';
import Spinner from '../spinner';
import Logo from '../logo';
import Text from '../text';
import styles from './loading-page.scss';

const LoadingPage = () => (
  <div className={styles.loading}>
    <Logo size="small" />
    <Text
      text="blue vera"
      bold="bold"
      theme="blue"
      size="extra-big"
      type="uppercase"
    />
    <Spinner />
  </div>
);

export default LoadingPage;
