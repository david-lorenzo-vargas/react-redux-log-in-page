import CONSTANTS from './users.constants';

const defaultState = {
  fetchUserRequest: undefined,
  users: [],
  currentUser: {
    userName: '',
    email: '',
    password: '',
  },
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

const changeInput = (state, action) => {
  const newState = {
    ...state,
    currentUser: action.payload,
  };

  return newState;
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_USERS_SUCCESS: return fetchUsersSuccess(state, action);
    case CONSTANTS.FETCH_USERS_PENDING: return fetchUsersPending(state);
    case CONSTANTS.FETCH_USERS_REJECTED: return fetchUsersRejected(state);
    case CONSTANTS.CHANGE_INPUT: return changeInput(state, action);
    default: return state;
  }
};

export default loginReducer;
