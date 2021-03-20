import axios from "axios";
import authActions from "./auth-actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const registerUser = (newUser) => (dispatch) => {
  dispatch(authActions.registerUserRequest());

  axios
    .post("/users/signup", newUser)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.registerUserSuccess(data));
      toast.success("Registration successful");
    })
    .catch((error) => {
      dispatch(authActions.registerUserError(error.message));
      toast.error(error.message);
    });
};

const loginUser = (user) => (dispatch) => {
  dispatch(authActions.loginUserRequest());

  axios
    .post("/users/login", user)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.loginUserSuccess(data));
      toast.success("Login successful");
    })
    .catch((error) => {
      dispatch(authActions.loginUserError(error.message));
      toast.error(error.message);
    });
};

const logoutUser = () => (dispatch) => {
  dispatch(authActions.logoutUserRequest());

  axios
    .post("/users/logout")
    .then(() => {
      dispatch(authActions.logoutUserSuccess());
      token.unset();
    })
    .catch((error) => {
      dispatch(authActions.logoutUserError(error));
      toast.error(error);
    });
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  axios
    .get("/users/current")
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch((error) => {
      dispatch(authActions.getCurrentUserError(error));
      toast.error(error);
    });
};

export default {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};
