import React from 'react';
import { connect } from 'react-redux';
import Banner from '../banner';
import Login from '../login';
import { Row, Column } from '../grid';
import styles from './welcome-page.scss';

const WelcomePage = (props) => {
  const { state } = props;
  const { registerStatus, userLoggedIn } = state;

  return (
    registerStatus !== 'started' && !userLoggedIn ?
      (
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
      ) :
      ''
  );
};

const mapStateToProps = (store) => ({
  state: {
    ...store.sendButton.users,
    ...store.input,
  },
});

export default connect(mapStateToProps)(WelcomePage);
