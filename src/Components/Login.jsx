import React, { Component } from "react";
import axios from "../axios-instance";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        password: "",
      },
      error: "",
    };
  }
  formHandler = (e, name) => {
    const formData = { ...this.state.form };
    formData[name] = e.target.value.trim();
    this.setState({
      form: formData,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      error: "",
    });
    axios
      .post("login", this.state.form)
      .then(async (response) => {
        this.props.history.replace("/admin/home");
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  };
  render() {
    return (
      <div>
        <p className="text-center-bold">Login</p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={(event) => this.formHandler(event, "email")}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={this.state.password}
              onChange={(e) => this.formHandler(e, "password")}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <p className="text-danger">{this.state.error}</p>
      </div>
    );
  }
}

export default Login;
