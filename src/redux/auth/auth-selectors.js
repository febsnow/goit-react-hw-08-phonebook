const getAuthorised = (state) => state.auth.token;
const getUserName = (state) => state.auth.user.name;

export default {
  getAuthorised,
  getUserName,
};
