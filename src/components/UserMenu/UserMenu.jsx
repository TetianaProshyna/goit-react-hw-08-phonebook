// import PropTypes from "prop-types";
import { connect } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import authOperations from "../../redux/auth/authOperations";

import avatarDefault from "../UserMenu/avatarDefault.jpg";

const UserMenu = ({ avatar, email, onLogout }) => {
  return (
    <div className="userMenu">
      <img className="avatar" width="35" src={avatar} alt="avatar" />
      <span className="userEmail">{email}</span>
      <button className="logoutBtn" type="button" onClick={onLogout}>
        <i className="material-icons"> logout </i>
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  avatar: avatarDefault,
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

UserMenu.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
