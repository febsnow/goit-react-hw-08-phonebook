import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import styles from "./RegisterView.module.css";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <>
        <form
          className={styles.form}
          onSubmit={this.submitHandler}
          autoComplete="off"
        >
          <TextField
            className={styles.formField}
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Enter your name"
            label="User name"
            autoComplete="off"
            required
            variant="outlined"
            onChange={this.changeHandler}
          />
          <TextField
            className={styles.formField}
            type="email"
            value={this.state.email}
            name="email"
            placeholder="Enter your e-mail"
            label="E-mail"
            required
            variant="outlined"
            onChange={this.changeHandler}
          />
          <TextField
            className={styles.formField}
            type="password"
            value={this.state.password}
            name="password"
            placeholder="Enter your password"
            required
            label="Password"
            variant="outlined"
            onChange={this.changeHandler}
          />
          <Button
            className={styles.registerBtn}
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            Register
          </Button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (newUser) => {
    dispatch(authOperations.registerUser(newUser));
  },
});

// const mapDispatchToProps = {
//   onSubmit: operations.registerUser
// };

export default connect(null, mapDispatchToProps)(RegisterView);
