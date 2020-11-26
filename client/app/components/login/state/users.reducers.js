import CONSTANTS from './users.constants';

const defaultState = {
  fetchUserRequest: undefined,
  users: [],
};

const fetchUsersSuccess = (state, action) => {
  const newState = {
    ...state,
    fetchUserRequest: 'success',
    users: action.payload.users,
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

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_USERS_SUCCESS: return fetchUsersSuccess(state, action);
    case CONSTANTS.FETCH_USERS_PENDING: return fetchUsersPending(state);
    case CONSTANTS.FETCH_USERS_REJECTED: return fetchUsersRejected(state);
    default: return state;
  }
};

export default loginReducer;
