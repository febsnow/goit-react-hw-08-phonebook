import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorPrompt from "../ErrorPrompt/ErrorPrompt";
import operations from "../../redux/contacts/contacts-operations";
import {
  getAllContacts,
  contactToEdit,
  isEditMode,
} from "../../redux/contacts/contacts-selectors";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./AddContactForm.module.css";
import contactsActions from "../../redux/contacts/contacts-actions";

class AddContactForm extends Component {
  state = {
    name: "",
    number: "",
    message: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({
        name: this.props.contactToEdit.name,
        number: this.props.contactToEdit.number,
      });
    }
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (evt) => {
    evt.preventDefault();

    const { name, number } = this.state;

    if (
      this.props.items.find(
        (contact) =>
          contact.name.toLowerCase() === name.toLowerCase() &&
          contact.id !== this.props.contactToEdit.id
      )
    ) {
      return toast.error(`${name} already exist`);
    }

    const contact = {
      name,
      number,
      id: this.props.contactToEdit.id || null,
    };

    this.props.onSubmit(contact);

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    const { isEditMode } = this.props;
    return (
      <>
        {/* {message && <ErrorPrompt message={message} />} */}

        <form className={styles.contactsForm} onSubmit={this.submitHandler}>
          <label htmlFor="contactName" className={styles.label}>
            Name
          </label>
          <input
            className={styles.formInput}
            type="text"
            value={name}
            name="name"
            id="contactName"
            placeholder="Enter name"
            required
            onChange={this.changeHandler}
          />
          <label htmlFor="contactNumber" className={styles.label}>
            Number
          </label>
          <input
            className={styles.formInput}
            type="tel"
            value={number}
            name="number"
            id="contactNumber"
            placeholder="Enter phone number"
            required
            onChange={this.changeHandler}
          />
          {isEditMode ? (
            <>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<EditIcon />}
                type="submit"
                size="small"
              >
                Save changes
              </Button>
              <Button
                variant="contained"
                color="default"
                startIcon={<CloseIcon />}
                type="button"
                size="small"
                onClick={() => this.props.onExitEdit()}
              >
                Discard changes
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              size="medium"
              color="primary"
              startIcon={<SaveIcon />}
              type="submit"
            >
              Add contacts
            </Button>
          )}
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: getAllContacts(state),
    contactToEdit: contactToEdit(state),
    isEditMode: isEditMode(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => {
    if (contact.id) {
      return dispatch(operations.editContact(contact));
    }
    dispatch(operations.addContact(contact));
  },
  onExitEdit: () => dispatch(contactsActions.exitEditMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);
