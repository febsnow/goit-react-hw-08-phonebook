import { connect } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import styles from "./UserMenu.module.css";

const UserMenu = ({ userName, onLogout }) => {
  return (
    <div className={styles.userMenu}>
      <p>Account: {userName}</p>

      <Button
        className={styles.logout}
        variant="outlined"
        size="small"
        endIcon={<ExitToAppIcon />}
        type="button"
        disableElevation
        onClick={onLogout}
      >
        Logout
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userName: authSelectors.getUserName(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(authOperations.logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
