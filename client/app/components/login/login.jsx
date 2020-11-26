import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import actions from './state/users.actions';
import Input from '../input';
import Button from '../button';
import usersApi from './state/api';

class Login extends React.Components() {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  hanldeButtonClick() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.fetchUsersPending();

    usersApi.get()
      .then(response => response.json())
      .then(data => this.fetchUsersSuccess(data))
      .catch(() => this.fetchUsersRejected());
  }

  fetchUsersSuccess(data) {
    this.props.actions.fetchUsersSuccess(data);
  }

  fetchUsersPending() {
    this.props.actions.fetchUsersPending();
  }

  render() {
    return (
      <>
        <Input placeHolder="user name" type="text" />
        <Input placeHolder="email" type="text" />
        <Input placeHolder="password" type="password" />
        <Button onClick={this.handleButtonClick} theme="blue" text="Log In" />
      </>
    );
  }
}

const mapStateToProps = (store) => ({
  state: {
    ...store.sendButton,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
