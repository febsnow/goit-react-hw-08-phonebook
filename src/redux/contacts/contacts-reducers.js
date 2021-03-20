import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "../auth/auth-actions";
import actions from "./contacts-actions";

const {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  editContactRequest,
  editContactSuccess,
  editContactError,
  exitEditMode,
  pickContactToEdit,

  clearError,
} = actions;

const { logoutUserSuccess } = authActions;

const filterReducer = createReducer("", {
  [actions.filterContacts]: (_, { payload }) => payload,
});

const itemsReducer = createReducer([], {
  [fetchContactSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [editContactSuccess]: (state, { payload }) =>
    state.map((contact) => (contact.id === payload.id ? payload : contact)),
  [removeContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [logoutUserSuccess]: () => [],
});

const initialState = {
  name: "",
  number: "",
  id: null,
};

const contactToEditReducer = createReducer(initialState, {
  [pickContactToEdit]: (_, { payload }) => payload,
  [editContactSuccess]: () => initialState,
  [removeContactSuccess]: (state, { payload }) =>
    state.id === payload ? initialState : state,
  [logoutUserSuccess]: () => initialState,
  [exitEditMode]: () => initialState,
});

const loadingReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
  [editContactRequest]: () => true,
  [editContactSuccess]: () => false,
  [editContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchContactError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [removeContactError]: (_, { payload }) => payload,
  [editContactError]: (_, { payload }) => payload.message,
  [clearError]: () => null,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
  contactToEdit: contactToEditReducer,
});

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// export default rootReducer;
