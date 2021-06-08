import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import authSelectors from "../../redux/auth/authSelectors";

// import PropTypes from 'prop-types';

const Navigation = ({ isAuthenticated }) => {
  return (
    <div>
      <NavLink
        activeClassName={"active"}
        className="navLink homeLink"
        exact
        to="/"
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          activeClassName={"active"}
          className="navLink"
          exact
          to="/phonebook"
        >
          Phonebook
        </NavLink>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

Navigation.propTypes = {};

export default connect(mapStateToProps)(Navigation);
