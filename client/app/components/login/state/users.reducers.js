import CONSTANTS from './users.constants';

const defaultState = {
  fetchUserRequest: undefined,
  users: [],
  currentUserName: '',
  registerUserName: '',
  currentUserEmail: '',
  registerUserEmail: '',
  currentUserPassword: '',
  registerUserPassword: '',
  userLoggedIn: false,
  userTriedToLogIn: false,
  userNameLogged: '',
  registerStatus: '',
  forgottenEmail: '',
  forgottenPasswordSubmited: false,
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

const handleRegisterUserNameInput = (state, action) => {
  const newState = {
    ...state,
    registerUserName: action.payload,
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

const handleRegisterEmailInput = (state, action) => {
  const newState = {
    ...state,
    registerUserEmail: action.payload,
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

const handleRegisterPasswordInput = (state, action) => {
  const newState = {
    ...state,
    registerUserPassword: action.payload,
  };

  return newState;
};

const handleForgottenPasswordlInput = (state, action) => {
  const newState = {
    ...state,
    forgottenEmail: action.payload,
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
    userTriedToLogIn: true,
    userNameLogged: state.currentUserName,
  };

  return newState;
};

const handleSubmitForgottenPasswordButtonClick = (state) => {
  const newState = {
    ...state,
    forgottenPasswordSubmited: true,
  };

  return newState;
};

const handleStartRegisterButtonClick = (state) => {
  const newState = {
    ...state,
    registerStatus: 'started',
  };

  return newState;
};

const handleRegisterButtonClick = (state) => {
  const newUser = {
    username: state.registerUserName,
    email: state.registerUserEmail,
    password: state.registerUserPassword,
  };

  const newState = {
    ...state,
    users: [...state.users, newUser],
    registerUserName: '',
    registerUserEmail: '',
    registerUserPassword: '',
    registerStatus: 'finished',
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
    case CONSTANTS.CHANGE_INPUT_PASSWORD:
      return handlepasswordInput(state, action);
    case CONSTANTS.HANDLE_BUTTON_CLICK: return handleButtonClick(state);
    case CONSTANTS.HANDLE_USER_LOG_IN_SUCCESS: return userLogInSuccess(state);
    case CONSTANTS.HANLDE_REGISTER_INPUT_NAME:
      return handleRegisterUserNameInput(state, action);
    case CONSTANTS.HANLDE_REGISTER_EMAIL:
      return handleRegisterEmailInput(state, action);
    case CONSTANTS.HANLDE_REGISTER_PASSWORD:
      return handleRegisterPasswordInput(state, action);
    case CONSTANTS.HANLDE_REGISTER_STARTED_BUTTON_CLICK:
      return handleStartRegisterButtonClick(state);
    case CONSTANTS.HANLDE_REGISTER_FINISHED_BUTTON_CLICK:
      return handleRegisterButtonClick(state);
    case CONSTANTS.HANLDE_FORGOTTEN_PASSWORD_INPUT:
      return handleForgottenPasswordlInput(state, action);
    case CONSTANTS.HANLDE_FORGOTTEN_PASSWORD_BUTTON:
      return handleSubmitForgottenPasswordButtonClick(state);

    default: return state;
  }
};

export default loginReducer;
