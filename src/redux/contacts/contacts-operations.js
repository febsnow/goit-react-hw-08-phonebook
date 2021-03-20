import axios from "axios";
import actions from "./contacts-actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch((error) => {
      dispatch(actions.fetchContactError(error.message));
      toast.error(error.message);
    });
};

const addContact = (contact) => (dispatch) => {
  dispatch(actions.addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => {
      dispatch(actions.addContactError(error.message));
      toast.error(error.message);
    });
};

const removeContact = (id) => (dispatch) => {
  dispatch(actions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.removeContactSuccess(id)))
    .catch((error) => {
      dispatch(actions.removeContactError(error.message));
      toast.error(error.message);
    });
};

const editContact = (contact) => (dispatch) => {
  dispatch(actions.editContactRequest());
  const updates = {
    name: contact.name,
    number: contact.number,
  };
  axios
    .patch(`/contacts/${contact.id}`, updates)
    .then(({ data }) => {
      dispatch(actions.editContactSuccess(data));
    })
    .catch((error) => {
      dispatch(actions.editContactError(error.message));
      toast.error(error.message);
    });
  fetchContacts();
};

export default {
  fetchContacts,
  addContact,
  removeContact,
  editContact,
};
