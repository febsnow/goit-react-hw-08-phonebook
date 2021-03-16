import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

class LoginForm extends Component {
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
        <form onSubmit={this.submitHandler}>
          <input
            type="email"
            value={this.state.email}
            name="email"
            placeholder="Enter your e-mail"
            autoComplete="off"
            required
            onChange={this.changeHandler}
          />
          <input
            type="password"
            value={this.state.password}
            name="password"
            placeholder="Enter your password"
            autoComplete="off"
            required
            onChange={this.changeHandler}
          />
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (user) => dispatch(authOperations.loginUser(user)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
