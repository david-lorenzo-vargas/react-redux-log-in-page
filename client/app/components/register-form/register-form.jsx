import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import actions from '../login/state';
import Input from '../input';
import Button from '../button';
import styles from './register-form.scss';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleRegisterUserNameInput = this.handleRegisterUserNameInput.bind(this);
    this.handleRegisterEmailInput = this.handleRegisterEmailInput.bind(this);
    this.handleRegisterpasswordInput = this.handleRegisterpasswordInput.bind(this);
    this.handleRegisterButtonClick = this.handleRegisterButtonClick.bind(this);
  }

  handleRegisterUserNameInput() {}

  handleRegisterEmailInput() {}

  handleRegisterpasswordInput() {}

  handleRegisterButtonClick() {}

  render() {
    return (
      <>
        <Input
          onChange={this.handleRegisterUserNameInput}
          placeHolder="user name"
          type="text"
          value={state.currentUserName}
          wrong={wrongUser ? 'wrong' : ''}
          outLine="none"
        />
        <Input
          onChange={this.handleRegisterEmailInput}
          placeHolder="email"
          type="text"
          value={state.currentUserEmail}
          wrong={wrongUser ? 'wrong' : ''}
        />
        <Input
          onChange={this.handleRegisterpasswordInput}
          placeHolder="password"
          type="password"
          value={state.currentUserPassword}
          wrong={wrongUser ? 'wrong' : ''}
        />
        <Button
          onClick={this.handleRegisterButtonClick}
          theme="blue"
          text="Register"
        />
      </>
    );
  }
}

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
