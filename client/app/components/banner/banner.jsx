import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import actions from '../login/state/users.actions';
import styles from './banner.scss';
import Text from '../text';
import Logo from '../logo';

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.handleStartRegisterButtonClick = this.handleStartRegisterButtonClick.bind(this);
  }

  handleStartRegisterButtonClick() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions.handleStartRegisterButtonClick();
  }

  render() {
    const { state } = this.props;
    const { fetchUserRequest } = state;
    return (
      fetchUserRequest === 'success' ?
        (
          <div className={styles.banner}>
            <Logo size="small" />
            <Text
              text="blue vera"
              bold="bold"
              theme="blue"
              size="extra-big"
              type="uppercase"
            />
            <Text
              text="- Here for you -"
              theme="blue"
              size="big"
            />
            <Text
              text="Register"
              size="medium"
              cursive="italic"
              link="link"
              theme="blue"
              margin="margin"
              onClick={this.handleStartRegisterButtonClick}
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

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
