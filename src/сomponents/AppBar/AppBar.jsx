import { connect } from "react-redux";
import Navigation from "../Navigation/Navigation";
import authSelectors from "../../redux/auth/auth-selectors";
import UserMenu from "../UserMenu/UserMenu";
import LoginMenu from "../LoginMenu/LoginMenu";

const AppBar = ({ isLoggedIn }) => (
  <header>
    <Navigation />
    {isLoggedIn ? <UserMenu /> : <LoginMenu />}
  </header>
);

const mapStateToProps = (state) => ({
  isLoggedIn: authSelectors.getAuthorised(state),
});

export default connect(mapStateToProps)(AppBar);
