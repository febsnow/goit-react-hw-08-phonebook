const getAuthorised = (state) => state.auth.isLoggedIn;
const isLoading = (state) => state.auth.loading;
const getUserName = (state) => state.auth.user.name;

export default {
  getAuthorised,
  getUserName,
  isLoading,
};
