import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleInput(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  render() {
    let description, link, emailInput;
    if (this.props.formType === "signup") {
      description = "Sign Up";
      link = <Link to="/login" />;
      emailInput = (
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            onChange={this.handleInput("email")}
            value={this.state.email}
          />
        </div>
      );
    } else if (this.props.formType === "login") {
      description = "Log In";
      emailInput = "";
      link = <Link to="/signup" />;
    }
    return (
      <div>
        <h2>{description}</h2>
        {link}
        <ul>{this.props.errors.map(err => <li key={err}>{err}</li>)}</ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            onChange={this.handleInput("username")}
            value={this.state.username}
          />
          {emailInput}
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={this.handleInput("password")}
            value={this.state.password}
          />
          <input type="submit" value={description} />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
