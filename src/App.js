import React, { Component, lazy, Suspense } from "react";
import { Switch } from "react-router";
import { connect } from "react-redux";

import AppBar from "./сomponents/AppBar/AppBar";
import authOperations from "./redux/auth/auth-operations";
import PrivateRoute from "./сomponents/PrivateRoute/PrivateRoute";
import PublicRoute from "./сomponents/PublicRoute/PublicRoute";
import { Preloader } from "./сomponents/Loader/Loader";

const HomePage = lazy(() => import("./сomponents/HomePage/HomePage"));
const RegisterForm = lazy(() =>
  import("./сomponents/RegisterForm/RegisterForm")
);
const LoginForm = lazy(() => import("./сomponents/LoginForm/LoginForm"));
const PhoneBook = lazy(() => import("./сomponents/PhoneBook/PhoneBook"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={Preloader}>
          <Switch>
            <PublicRoute path="/" exact component={HomePage} />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/phonebook"
              component={LoginForm}
            />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/"
              component={RegisterForm}
            />
            <PrivateRoute path="/phonebook" component={PhoneBook} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
