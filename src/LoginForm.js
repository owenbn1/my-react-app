import React, {Component} from "react";
import "./LoginForm.css";
//imports react and css with this js

export default class LoginForm extends Component {
  render() {
    return (
      <div className="login-form">
        <form>
          <h3>Log In</h3>
          <label htmlFor="userName">Username: </label>
          <input type="text" id="userName" name="userName" />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

// html format for the login form section