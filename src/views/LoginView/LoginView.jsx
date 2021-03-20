import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import authOperations from "../../redux/auth/auth-operations";

import styles from "./LoginView.module.css";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.submitHandler}>
          <TextField
            type="email"
            value={this.state.email}
            name="email"
            placeholder="Enter your e-mail"
            autoComplete="off"
            label="E-mail"
            id="standard-required"
            onChange={this.changeHandler}
          />
          <TextField
            type="password"
            value={this.state.password}
            name="password"
            placeholder="Enter your password"
            autoComplete="off"
            id="standard-password-input"
            label="Password"
            onChange={this.changeHandler}
          />
          <Button
            className={styles.loginBtn}
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (user) => dispatch(authOperations.loginUser(user)),
});

export default connect(null, mapDispatchToProps)(LoginView);
