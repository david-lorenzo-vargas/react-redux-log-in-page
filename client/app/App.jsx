import React from 'react';
import { Row, Column } from './components/grid';
import Login from './components/login';
import Banner from './components/banner';

import styles from './reset.scss';

const App = () => (
  <div className={styles.app}>
    <Row center>
      <div className={styles.app__info}>
        <Column>
          <Banner />
        </Column>
      </div>
      <div className={styles.app__input}>
        <Column>
          <Login />
        </Column>
      </div>
    </Row>
  </div>

);

export default App;
