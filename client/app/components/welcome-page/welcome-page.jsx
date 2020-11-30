import React from 'react';
import Banner from '../banner';
import Login from '../login';
import { Row, Column } from '../grid';
import styles from './welcome-page.scss';

const WelcomePage = () => (
  <div className={styles.welcome}>
    <Row>
      <Column>
        <Banner />
      </Column>
      <Column>
        <Login />
      </Column>
    </Row>
  </div>

);

export default WelcomePage;
