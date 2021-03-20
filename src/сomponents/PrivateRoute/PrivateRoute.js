import react from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import authSelectors from "../../redux/auth/auth-selectors";

const PrivateRoute = ({
  component: Component,
  isAuthorised,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthorised ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthorised: authSelectors.getAuthorised(state),
});

export default connect(mapStateToProps)(PrivateRoute);
