import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import authSelectors from "../../redux/auth/auth-selectors";

const PublicRoute = ({
  component: Component,
  redirectTo,
  isAuthorized,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthorized && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthorized: authSelectors.getAuthorised(state),
});

export default connect(mapStateToProps)(PublicRoute);
