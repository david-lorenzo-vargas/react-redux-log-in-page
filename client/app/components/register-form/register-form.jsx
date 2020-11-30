import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import actions from '../login/state/users.actions';
import styles from './register-form.scss';
import Input from '../input';
import Button from '../button';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleRegisterUserNameInput = this.handleRegisterUserNameInput.bind(this);
    this.handleRegisterEmailInput = this.handleRegisterEmailInput.bind(this);
    this.handleRegisterPasswordInput = this.handleRegisterPasswordInput.bind(this);
    this.handleRegisterButtonClick = this.handleRegisterButtonClick.bind(this);
  }

  handleRegisterUserNameInput(value) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.handleRegisterUserNameInput(value);
  }

  handleRegisterEmailInput(value) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.handleRegisterEmailInput(value);
  }

  handleRegisterPasswordInput(value) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.handleRegisterPasswordInput(value);
  }

  handleRegisterButtonClick() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.handleRegisterButtonClick();
  }

  render() {
    const { state } = this.props;
    const {
      registerUserName,
      registerUserEmail,
      registerUserPassword,
      registerStatus,
    } = state;

    return (
      registerStatus === 'started' ?
        (
          <div className={styles.form}>
            <Input
              onChange={this.handleRegisterUserNameInput}
              placeHolder="user name"
              type="text"
              value={registerUserName}
              outLine="none"
            />
            <Input
              onChange={this.handleRegisterEmailInput}
              placeHolder="email"
              type="text"
              value={registerUserEmail}
            />
            <Input
              onChange={this.handleRegisterPasswordInput}
              placeHolder="password"
              type="password"
              value={registerUserPassword}
            />
            <Button
              onClick={this.handleRegisterButtonClick}
              theme="blue"
              text="Register"
            />
          </div>
        ) :
        ''
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
