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

  handleButtonClick() {
    this.fetchUsers();
  }

  handleUserNameInput(value) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.changeInput(value);
  }

  handleEmailInput(value) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.changeInput(value);
  }

  handlepasswordInput(value) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.changeInput(value);
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
    return (
      <>
        <Input onChange={this.handleUserNameInput} placeHolder="user name" type="text" />
        <Input onChange={this.handleEmailInput} placeHolder="email" type="text" />
        <Input onChange={this.handlepasswordInput} placeHolder="password" type="password" />
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
