import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";

import RegisterForm from "./сomponents/RegisterForm/RegisterForm";
import LoginForm from "./сomponents/LoginForm/LoginForm";
import AppBar from "./сomponents/AppBar/AppBar";
import HomePage from "./сomponents/HomePage/HomePage";
import PhoneBook from "./сomponents/PhoneBook/PhoneBook";
import authOperations from "./redux/auth/auth-operations";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/phonebook" component={PhoneBook} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
