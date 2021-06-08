import { Component } from "react";
import { connect } from "react-redux";
import Container from "../../components/Container/Container";

import authOperations from "../../redux/auth/authOperations";

class RegistrationView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: "",
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
          <h2 className="regTitle">Registration</h2>
          <label className="regFormLabel">
            <span>Name</span>
            <input
              className="regInput"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
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
          <button className="regBtn">Sign up</button>
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegistrationView);
