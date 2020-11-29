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

const handleUserNameInput = (text) => ({
  type: CONSTANTS.CHANGE_INPUT_NAME,
  payload: text,
});

const handleRegisterUserNameInput = (text) => ({
  type: CONSTANTS.HANLDE_REGISTER_INPUT_NAME,
  payload: text,
});

const handleEmailInput = (text) => ({
  type: CONSTANTS.CHANGE_INPUT_EMAIL,
  payload: text,
});

const handleRegisterEmailInput = (text) => ({
  type: CONSTANTS.HANLDE_REGISTER_EMAIL,
  payload: text,
});

const handlepasswordInput = (text) => ({
  type: CONSTANTS.CHANGE_INPUT_PASSWORD,
  payload: text,
});

const handleRegisterpasswordInput = (text) => ({
  type: CONSTANTS.HANLDE_REGISTER_PASSWORD,
  payload: text,
});

const handleButtonClick = () => ({
  type: CONSTANTS.HANDLE_BUTTON_CLICK,
});

const handleStartRegisterButtonClick = () => ({
  type: CONSTANTS.HANLDE_REGISTER_STARTED_BUTTON_CLICK,
});

const handleRegisterButtonClick = () => ({
  type: CONSTANTS.HANLDE_REGISTER_FINISHED_BUTTON_CLICK,
});

const userLogInSuccess = () => ({
  type: CONSTANTS.HANDLE_USER_LOG_IN_SUCCESS,
});

export default {
  fetchUsersSuccess,
  fetchUsersPending,
  fetchUsersRejected,
  handleUserNameInput,
  handleEmailInput,
  handlepasswordInput,
  handleButtonClick,
  userLogInSuccess,
  handleRegisterUserNameInput,
  handleRegisterEmailInput,
  handleRegisterpasswordInput,
  handleStartRegisterButtonClick,
  handleRegisterButtonClick,
};
