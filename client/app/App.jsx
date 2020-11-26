import React from 'react';
import { Row, Column } from './components/grid';
import Input from './components/input';
import Text from './components/text';
import Button from './components/button';
import Logo from './components/logo';
import styles from './reset.scss';

const App = () => (
  <div className={styles.app}>
    <Row center>
      <div className={styles.app__info}>
        <Column>
          <Logo size="medium" />
          <Text
            text="blue vera"
            bold="bold"
            theme="blue"
            size="extra-big"
            type="uppercase"
          />
          <Text
            text="Log in"
            theme="blue"
            size="big"
          />
          <Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            size="extra-small"
            cursive="italic"
          />
        </Column>
      </div>
      <div className={styles.app__input}>
        <Column>
          <Input placeHolder="user name" type="text" />
          <Input placeHolder="email" type="text" />
          <Input placeHolder="password" type="password" />
          <Button theme="blue" text="Log In" />
        </Column>
      </div>
    </Row>
  </div>

);

export default App;
