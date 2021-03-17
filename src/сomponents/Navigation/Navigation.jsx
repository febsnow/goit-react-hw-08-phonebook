import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";

const Navigation = ({ isAuthorized }) => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isAuthorized && <NavLink to="/phonebook">PhoneBook</NavLink>}
    </nav>
  );
};
const mapStateToProps = (state) => ({
  isAuthorized: authSelectors.getAuthorised(state),
});

export default connect(mapStateToProps)(Navigation);
