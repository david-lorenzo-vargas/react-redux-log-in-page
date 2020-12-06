import React from 'react';
import { connect } from 'react-redux';
import styles from './forgotten-password-message.scss';
import { Row, Column } from '../grid';
import Text from '../text';

const ForgottenPageMessage = (props) => {
  const { state } = props;
  const { forgottenEmail, users, forgottenPasswordSubmited } = state;

  const checkIfUserEmailExists = () => {
    const userEmail = users.map((item) => item.email);
    return userEmail.includes(forgottenEmail);
  };

  const getTheRightMessage = () => {
    const theUserExists = checkIfUserEmailExists();
    let message;

    if (theUserExists) {
      message = 'Please check your email, a new password has been sent';
    }

    if (!theUserExists) {
      message = 'Sorry this user is not registered';
    }

    return message;
  };

  return (
    forgottenPasswordSubmited ?
      (
        <div className={styles.message}>
          <Row>
            <Column>
              <Text
                text={getTheRightMessage()}
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
      null
  );
};

const mapStateToProps = (store) => ({
  state: {
    ...store.sendButton.users,
    ...store.input,
  },
});

export default connect(mapStateToProps)(ForgottenPageMessage);
