import React from 'react';
import { connect } from 'react-redux';
import styles from './logged-in-page.scss';
import { Row, Column } from '../grid';
import Text from '../text';

const WelcomePage = (props) => {
  const { state } = props;
  const { userNameLogged, userLoggedIn } = state;

  return (
    userLoggedIn ?
      (
        <div className={styles.welcome}>
          <Row>
            <Column>
              <Text
                text={`Welcome ${userNameLogged}! you are logged in`}
                theme="white"
                cursive="cursive"
                type="uppercase"
                size="extra-big"
                bold="bold"
              />
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
