import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types';

const AuthNav = (props) => {
  return (
    <div>
      <NavLink
        activeClassName={"active"}
        className="navLink regLink"
        exact
        to="/registration"
      >
        Register
      </NavLink>
      <NavLink activeClassName={"active"} className="navLink" exact to="/login">
        Login
      </NavLink>
    </div>
  );
};

AuthNav.propTypes = {};

export default AuthNav;
