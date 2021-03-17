const getAuthorised = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;

export default {
  getAuthorised,
  getUserName,
};
