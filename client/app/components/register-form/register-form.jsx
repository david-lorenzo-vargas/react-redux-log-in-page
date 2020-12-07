import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import actions from '../login/state/users.actions';
import styles from './register-form.scss';
import Input from '../input';
import Button from '../button';

const RegisterForm = (props) => {
  const { state } = props;
  const {
    registerUserName,
    registerUserEmail,
    registerUserPassword,
    registerStatus,
  } = state;

  const handleRegisterUserNameInput = (value) => {
    props.actions.handleRegisterUserNameInput(value);
  };

  const handleRegisterEmailInput = (value) => {
    props.actions.handleRegisterEmailInput(value);
  };

  const handleRegisterPasswordInput = (value) => {
    props.actions.handleRegisterPasswordInput(value);
  };

  const handleRegisterButtonClick = () => {
    props.actions.handleRegisterButtonClick();
  };

  return (
    registerStatus === 'started' ?
      (
        <div className={styles.form}>
          <Input
            onChange={handleRegisterUserNameInput}
            placeHolder="user name"
            type="text"
            value={registerUserName}
            outLine="none"
          />
          <Input
            onChange={handleRegisterEmailInput}
            placeHolder="email"
            type="text"
            value={registerUserEmail}
          />
          <Input
            onChange={handleRegisterPasswordInput}
            placeHolder="password"
            type="password"
            value={registerUserPassword}
          />
          <Button
            onClick={handleRegisterButtonClick}
            theme="blue"
            text="Register"
          />
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
