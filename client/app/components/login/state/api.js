import users from './users.api.mock';

const apiCall = (fn) => () => new Promise((resolve, reject) => {
  try {
    window.setTimeout(() => {
      const response = {
        json: () => fn(),
      };

      resolve(response);
    }, 2000);
  } catch(e) {
    reject(e);
  }
});

const get = apiCall(() => ({
  success: true,
  usersArray: users,
}));

export default {
  get
};
