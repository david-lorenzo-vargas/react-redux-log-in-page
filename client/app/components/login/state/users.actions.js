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

export default {
  fetchUsersSuccess,
  fetchUsersPending,
  fetchUsersRejected,
};
