import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import actions from '../login/state/users.actions';
import styles from './forgotten-password-message.scss';
import { Row, Column } from '../grid';
import Text from '../text';
import Button from '../button';

const ForgottenPageMessage = (props) => {
  const { state } = props;
  const {
    forgottenEmail,
    users,
    forgottenPasswordSubmited,
    registerStatus,
  } = state;

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
      message = 'Sorry this user does not exist, please register';
    }

    return message;
  };

  const handleRegisterButtonClick = () => {
    props.actions.handleStartRegisterButtonClick();
  };

  const getTheRegisterButton = () => {
    const theUserExists = checkIfUserEmailExists();
    let component;

    if (!theUserExists) {
      component =
      (
        <Button
          onClick={handleRegisterButtonClick}
          theme="blue"
          text="Register"
        />
      );
    }

    return component;
  };

  return (
    forgottenPasswordSubmited && !registerStatus ?
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
          <Row>
            <Column>
              {getTheRegisterButton()}
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgottenPageMessage);
