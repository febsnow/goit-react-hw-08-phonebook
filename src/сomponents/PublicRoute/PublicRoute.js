import react from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import authSelectors from "../../redux/auth/auth-selectors";

const PublicRoute = ({
  component: Component,
  redirectTo,
  isAuthorised,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthorised && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthorised: authSelectors.getAuthorised(state),
});

export default connect(mapStateToProps)(PublicRoute);
