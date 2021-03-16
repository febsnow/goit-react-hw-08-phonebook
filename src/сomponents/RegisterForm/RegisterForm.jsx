import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorPrompt from "../ErrorPrompt/ErrorPrompt";
import authOperations from "../../redux/auth/auth-operations";

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    // number: "",
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
        <form onSubmit={this.submitHandler} autoComplete="off">
          <input
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Enter your name"
            required
            onChange={this.changeHandler}
          />
          <input
            type="email"
            value={this.state.email}
            name="email"
            placeholder="Enter your e-mail"
            required
            onChange={this.changeHandler}
          />
          {/* <input
            type="tel"
            value={this.state.number}
            name="number"
            placeholder="Enter your number"
            required
            onChange={this.changeHandler}
          /> */}
          <input
            type="password"
            value={this.state.password}
            name="password"
            placeholder="Enter your password"
            required
            onChange={this.changeHandler}
          />
          <button type="submit">Register</button>
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

export default connect(null, mapDispatchToProps)(RegisterForm);
