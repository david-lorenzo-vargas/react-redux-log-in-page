import CONSTANTS from './users.constants';

const defaultState = {
  fetchUserRequest: undefined,
  users: [],
  currentUserName: '',
  currentUserEmail: '',
  currentUserPassword: '',
  userLoggedIn: false,
};

const fetchUsersSuccess = (state, action) => {
  const newState = {
    ...state,
    fetchUserRequest: 'success',
    users: action.payload.usersArray,
  };

  return newState;
};

const fetchUsersPending = (state) => {
  const newState = {
    ...state,
    fetchUserRequest: 'pending',
  };

  return newState;
};

const fetchUsersRejected = (state) => {
  const newState = {
    ...state,
    fetchUserRequest: 'rejected',
  };

  return newState;
};

const handleUserNameInput = (state, action) => {
  const newState = {
    ...state,
    currentUserName: action.payload,
  };

  return newState;
};

const handleEmailInput = (state, action) => {
  const newState = {
    ...state,
    currentUserEmail: action.payload,
  };

  return newState;
};

const handlepasswordInput = (state, action) => {
  const newState = {
    ...state,
    currentUserPassword: action.payload,
  };

  return newState;
};

const handleButtonClick = (state) => {
  const newState = {
    ...state,
    fetchUserRequest: undefined,
    currentUserName: '',
    currentUserEmail: '',
    currentUserPassword: '',
  };

  return newState;
};

const userLogInSuccess = (state) => {
  const newState = {
    ...state,
    userLoggedIn: true,
  };

  return newState;
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_USERS_SUCCESS: return fetchUsersSuccess(state, action);
    case CONSTANTS.FETCH_USERS_PENDING: return fetchUsersPending(state);
    case CONSTANTS.FETCH_USERS_REJECTED: return fetchUsersRejected(state);
    case CONSTANTS.CHANGE_INPUT_NAME: return handleUserNameInput(state, action);
    case CONSTANTS.CHANGE_INPUT_EMAIL: return handleEmailInput(state, action);
    case CONSTANTS.CHANGE_INPUT_PASSWORD: return handlepasswordInput(state, action);
    case CONSTANTS.HANDLE_BUTTON_CLICK: return handleButtonClick(state);
    case CONSTANTS.HANDLE_USER_LOG_IN_SUCCESS: return userLogInSuccess(state);

    default: return state;
  }
};

export default loginReducer;
