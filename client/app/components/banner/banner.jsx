import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import actions from '../login/state/users.actions';
import styles from './banner.scss';
import Text from '../text';
import Logo from '../logo';

const Banner = (props) => {
  const { state } = props;
  const { fetchUserRequest, userTriedToLogIn } = state;

  const handleStartRegisterButtonClick = () => {
    props.actions.handleStartRegisterButtonClick();
  };

  return (
    fetchUserRequest === 'success' || userTriedToLogIn ?
      (
        <div className={styles.banner}>
          <Logo size="small" />
          <Text
            text="blue vera"
            bold="bold"
            theme="blue"
            size="big"
            type="uppercase"
            center="center"
          />
          <Text
            text="- Here for you -"
            theme="blue"
            size="medium"
          />
          <Text
            text="Register"
            size="medium"
            bold="bold"
            link="link"
            theme="blue"
            margin="margin"
            onClick={handleStartRegisterButtonClick}
          />
          <Text
            text="Terms and Conditions"
            size="extra-small"
            cursive="italic"
            link="link"
            underLine="underline"
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

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
