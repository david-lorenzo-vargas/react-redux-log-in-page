import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import actions from './state/users.actions';
import Input from '../input';
import Button from '../button';
import usersApi from './state/api';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleUserNameInput = this.handleUserNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlepasswordInput = this.handlepasswordInput.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  checkIfUserNameExists() {
    const { state } = this.props;
    const { users, currentUserName } = state;

    const userName = users.map((item) => item.username);
    return userName.includes(currentUserName);
  }

  checkIfUserEmailExists() {
    const { state } = this.props;
    const { users, currentUserEmail } = state;

    const userEmail = users.map((item) => item.email);
    return userEmail.includes(currentUserEmail);
  }

  checkIfUserPasswordIsCorrect() {
    const { state } = this.props;
    const { users, currentUserPassword } = state;

    const userPassword = users.map((item) => item.password);
    return userPassword.includes(currentUserPassword);
  }

  checkIfUserExists() {
    let isTheRightUser;
    const theUserExists = this.checkIfUserNameExists() &&
    this.checkIfUserEmailExists() &&
    this.checkIfUserPasswordIsCorrect();

    if (theUserExists) {
      isTheRightUser = true;
    }

    return isTheRightUser;
  }

  handleButtonClick() {
    console.log(this.checkIfUserExists());
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.handleButtonClick();
  }

  handleUserNameInput(value) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.handleUserNameInput(value);
  }

  handleEmailInput(value) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.handleEmailInput(value);
  }

  handlepasswordInput(value) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.handlepasswordInput(value);
  }

  fetchUsersRejected() {}

  fetchUsers() {
    this.fetchUsersPending();

    usersApi.get()
      .then(response => response.json())
      .then(data => this.fetchUsersSuccess(data))
      .catch((e) => this.fetchUsersRejected(e));
  }

  fetchUsersSuccess(data) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.fetchUsersSuccess(data);
  }

  fetchUsersPending() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.fetchUsersPending();
  }

  render() {
    const { state } = this.props;

    return (
      <>
        <Input onChange={this.handleUserNameInput} placeHolder="user name" type="text" value={state.currentUserName} />
        <Input onChange={this.handleEmailInput} placeHolder="email" type="text" value={state.currentUserEmail} />
        <Input onChange={this.handlepasswordInput} placeHolder="password" type="password" value={state.currentUserPassword} />
        <Button onClick={this.handleButtonClick} theme="blue" text="Log In" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
