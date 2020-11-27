import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import actions from './components/login/state/users.actions';
import { Row, Column } from './components/grid';
import Login from './components/login';
import Banner from './components/banner';
import WelcomePage from './components/welcome-page';

import styles from './reset.scss';

const App = (props) => {
  const { state } = props;
  const { userLoggedIn } = state;

  return (
    <div className={styles.app}>
      <Row center>
        <div className={styles.app__info}>
          <Column>
            <Banner />
          </Column>
        </div>
        {!userLoggedIn ?
          (
            <div className={styles.app__input}>
              <Column>
                <Login />
              </Column>
            </div>
          ) :
          (
            <div className={styles.app__welcome}>
              <Column>
                <WelcomePage />
              </Column>
            </div>
          )}
      </Row>
    </div>
  );
};

const mapStateToProps = (store) => ({
  state: {
    ...store.sendButton.users,
    ...store.input,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
