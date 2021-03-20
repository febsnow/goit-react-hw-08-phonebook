import { connect } from "react-redux";
import { Link } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import styles from "./Navigation.module.css";

const Navigation = ({ isAuthorized }) => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      {isAuthorized && (
        <Link className={styles.link} to="/phonebook">
          PhoneBook
        </Link>
      )}
    </nav>
  );
};
const mapStateToProps = (state) => ({
  isAuthorized: authSelectors.getAuthorised(state),
});

export default connect(mapStateToProps)(Navigation);
