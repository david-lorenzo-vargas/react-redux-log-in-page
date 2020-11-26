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

const changeInput = () => ({
  type: CONSTANTS.CHANGE_INPUT,
});

export default {
  fetchUsersSuccess,
  fetchUsersPending,
  fetchUsersRejected,
  changeInput,
};