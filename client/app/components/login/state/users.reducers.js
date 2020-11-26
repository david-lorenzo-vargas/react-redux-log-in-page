import CONSTANTS from './users.constants';

const defaultState = {
  fetchUserRequest: undefined,
  loading: undefined,
  users: [],
};

const fetchUsersSuccess = (state, action) => {
  const newState = {
    ...state,
    fetchUserRequest: 'success',
    loading: undefined,
    users: action.payload.users,
  };

  return newState;
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_USERS_SUCCESS: return fetchUsersSuccess(state, action);
    default: return state;
  }
};

export default loginReducer;
