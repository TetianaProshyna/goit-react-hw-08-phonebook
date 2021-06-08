import { Component } from "react";
import authOperations from "../../redux/auth/authOperations";
import { connect } from "react-redux";
import Container from "../../components/Container/Container";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      email: "",
      password: "",
    });
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <form className="regForm" onSubmit={this.handleSubmit}>
          <h2 className="regTitle">Login</h2>
          <label className="regFormLabel">
            <span>Email</span>
            <input
              className="regInput"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label className="regFormLabel">
            <span>Password</span>
            <input
              className="regInput"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <button className="regBtn">Login</button>
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
