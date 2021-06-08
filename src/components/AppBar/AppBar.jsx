import React from "react";
import { connect } from "react-redux";
import styles from "./AppBar.module.scss";

import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
// import PropTypes from "prop-types";
import UserMenu from "../UserMenu/UserMenu";
import authSelectors from "../../redux/auth/authSelectors";
import Container from "../Container/Container";

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.menuWrapper}>
          <Navigation />
          {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </div>
      </Container>
    </header>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

AppBar.propTypes = {};

export default connect(mapStateToProps)(AppBar);
