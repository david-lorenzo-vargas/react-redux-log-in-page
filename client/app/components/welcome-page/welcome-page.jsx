import React from 'react';
import { connect } from 'react-redux';
import Banner from '../banner';
import Login from '../login';
import { Row, Column } from '../grid';
import styles from './welcome-page.scss';

const WelcomePage = (props) => {
  const { state } = props;
  const {
    registerStatus,
    userLoggedIn,
    forgottenPassword,
  } = state;

  return (
    registerStatus !== 'started' && !userLoggedIn && forgottenPassword === '' ?
      (
        <div className={styles.welcome}>
          <Row>
            <Column>
              <Banner />
            </Column>
            <Column grow>
              <Login />
            </Column>
          </Row>
        </div>
      ) :
      null
  );
};

const mapStateToProps = (store) => ({
  state: {
    ...store.sendButton.users,
    ...store.input,
  },
});

export default connect(mapStateToProps)(WelcomePage);
