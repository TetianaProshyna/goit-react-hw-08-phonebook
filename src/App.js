import { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import AppBar from "./components/AppBar/AppBar";
import authOperations from "./redux/auth/authOperations";

const HomeView = lazy(() => import("./views/HomeView/HomeView"));
const RegistrationView = lazy(() =>
  import("./views/RegistrationView/RegistrationView")
);
const LoginView = lazy(() => import("./views/LoginView/LoginView"));
const PhonebookView = lazy(() => import("./views/PhonebookView/PhonebookView"));

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<p className="loading">Loading...</p>}>
          <Switch>
            <PublicRoute path="/" exact component={HomeView} />
            <PrivateRoute
              redirectTo="/login"
              path="/phonebook"
              exact
              component={PhonebookView}
            />
            <PublicRoute
              path="/registration"
              redirectTo="/phonebook"
              exact
              restricted
              component={RegistrationView}
            />
            <PublicRoute
              redirectTo="/phonebook"
              path="/login"
              exact
              restricted
              component={LoginView}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
