import { connect } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

function HomeView({ isAuthorised }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Phonebook aplication</h1>
      {isAuthorised ? (
        <p>Now you are free to work with PhoneBook</p>
      ) : (
        <p>Please register or login to get access to PhoneBook</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthorised: authSelectors.getAuthorised(state),
});

export default connect(mapStateToProps)(HomeView);
