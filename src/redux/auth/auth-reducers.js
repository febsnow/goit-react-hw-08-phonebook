import { combineReducers, createReducer } from "@reduxjs/toolkit";

import actions from "./auth-actions";

const {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
  getCurrentUserRequest,
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
  [registerUserError]: (_, { payload }) => payload,
  [loginUserError]: (_, { payload }) => payload,
  [logoutUserError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
  [registerUserSuccess]: () => null,
  [loginUserSuccess]: () => null,
  [logoutUserSuccess]: () => null,
  [getCurrentUserSuccess]: () => null,
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

const loading = createReducer(false, {
  [registerUserRequest]: () => true,
  [registerUserSuccess]: () => false,
  [registerUserError]: () => false,
  [loginUserRequest]: () => true,
  [loginUserSuccess]: () => false,
  [loginUserError]: () => false,
  [logoutUserRequest]: () => true,
  [logoutUserSuccess]: () => false,
  [logoutUserError]: () => false,
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
});

export const authReducer = combineReducers({
  user,
  token,
  error,
  isLoggedIn,
  loading,
});
