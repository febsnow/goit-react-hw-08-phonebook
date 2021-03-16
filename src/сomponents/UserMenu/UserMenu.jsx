import { connect } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";

const UserMenu = ({ userName, onLogout }) => {
  return (
    <>
      <p>Account: {userName}</p>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  userName: authSelectors.getUserName(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(authOperations.logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
