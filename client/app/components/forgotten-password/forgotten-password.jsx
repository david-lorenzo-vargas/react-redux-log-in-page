import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import actions from '../login/state/users.actions';
import styles from './forgotten-password.scss';
import Input from '../input';
import Button from '../button';
import { Row, Column } from '../grid';

const ForgottenPassword = (props) => {
  const { forgottenEmail, forgottenPassword } = props;

  const handleForgottenPasswordlInput = (value) => {
    props.actions.handleForgottenPasswordlInput(value);
  };

  const handleSubmitForgottenPasswordButtonClick = () => {
    props.actions.handleSubmitForgottenPasswordButtonClick();
  };

  return (
    forgottenPassword ?
      (
        <div className={styles.forgotten}>
          <Row>
            <Column>
              <Input
                onChange={handleForgottenPasswordlInput}
                placeHolder="email"
                type="text"
                value={forgottenEmail}
              />
            </Column>
            <Column>
              <Button
                onClick={handleSubmitForgottenPasswordButtonClick}
                theme="blue"
                text="Submit"
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgottenPassword);
