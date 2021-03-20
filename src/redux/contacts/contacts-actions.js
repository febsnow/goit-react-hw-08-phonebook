import { createAction } from "@reduxjs/toolkit";

const fetchContactRequest = createAction("contacts/fetchContactRequest");
const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
const fetchContactError = createAction("contacts/fetchContactError");

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const pickContactToEdit = createAction(
  "editMode/pickContactToEdit",
  (id, name, number) => {
    return {
      payload: {
        id,
        name,
        number,
      },
    };
  }
);
const exitEditMode = createAction("editMode/cancelEdit");

const editContactRequest = createAction("contacts/editContactRequest");
const editContactSuccess = createAction("contacts/editContactSuccess");
const editContactError = createAction("contacts/editContactError");

const removeContactRequest = createAction("contacts/removeContactRequest");
const removeContactSuccess = createAction("contacts/removeContactSuccess");
const removeContactError = createAction("contacts/removeContactError");

const clearError = createAction("contacts/clearError");

const filterContacts = createAction("contacts/filter");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  editContactRequest,
  editContactSuccess,
  editContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  pickContactToEdit,
  exitEditMode,

  clearError,
  filterContacts,
};
