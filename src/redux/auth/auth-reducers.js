import { combineReducers, createReducer } from "@reduxjs/toolkit";

import actions from "./auth-actions";

const {
  registerUserSuccess,
  registerUserError,
  loginUserSuccess,
  loginUserError,
  logoutUserSuccess,
  logoutUserError,
  getCurrentUserSuccess,
  getCurrentUserError,
} = actions;

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [registerUserSuccess]: (_, { payload }) => payload.user,
  [loginUserSuccess]: (_, { payload }) => payload.user,
  [logoutUserSuccess]: () => initialState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerUserSuccess]: (_, { payload }) => payload.token,
  [loginUserSuccess]: (_, { payload }) => payload.token,
  [logoutUserSuccess]: () => null,
});

const error = createReducer(null, {
  [registerUserError]: (_, { payload }) => payload.message,
  [loginUserError]: (_, { payload }) => payload,
  [logoutUserError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isLoggedIn = createReducer(false, {
  [registerUserSuccess]: () => true,
  [loginUserSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerUserError]: () => false,
  [loginUserError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutUserSuccess]: () => false,
});

export const authReducer = combineReducers({
  user,
  token,
  error,
  isLoggedIn,
});
