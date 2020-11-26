import users from './users.api.mock';

const apiCall = (fn) => () => new Promise((resolve) => {
  window.setTimeout(() => {
    const response = {
      json: () => fn(),
    };

    resolve(response);
  }, 2000);
});

const get = apiCall(() => ({
  success: true,
  usersArray: users,
}));

export default get;
