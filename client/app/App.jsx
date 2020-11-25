import React from 'react';
import { Row, Column } from './components/grid';
import Input from './components/input';
import Text from './components/text';
import Button from './components/button';
import styles from './reset.scss';

const App = () => (
  <div className={styles.app}>
    <Row>
      <Column>
        <Text text="Log in" />
      </Column>
      <div className={styles.login__input}>
        <Column>
          <Input placeHolder="user name" />
          <Input placeHolder="email" />
          <Input placeHolder="password" />
          <Button theme="blue" text="Log In" />
        </Column>
      </div>

    </Row>
  </div>

);

export default App;
