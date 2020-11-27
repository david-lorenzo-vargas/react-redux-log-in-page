import CONSTANTS from './users.constants';

const fetchUsersSuccess = (data) => ({
  type: CONSTANTS.FETCH_USERS_SUCCESS,
  payload: data,
});

const fetchUsersPending = () => ({
  type: CONSTANTS.FETCH_USERS_PENDING,
});

const fetchUsersRejected = () => ({
  type: CONSTANTS.FETCH_USERS_REJECTED,
});

const handleUserNameInput = () => ({
  type: CONSTANTS.CHANGE_INPUT_NAME,
});

const handleEmailInput = () => ({
  type: CONSTANTS.CHANGE_INPUT_EMAIL,
});

const handlepasswordInput = () => ({
  type: CONSTANTS.CHANGE_INPUT_PASSWORD,
});

const handleButtonClick = () => ({
  type: CONSTANTS.HANDLE_BUTTON_CLICK,
});

export default {
  fetchUsersSuccess,
  fetchUsersPending,
  fetchUsersRejected,
  handleUserNameInput,
  handleEmailInput,
  handlepasswordInput,
  handleButtonClick,
};
