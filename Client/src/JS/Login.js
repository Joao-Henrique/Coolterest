import Auth from '../Auth/Auth.js';
import React, { Component } from 'react';

const auth = new Auth();

class Login extends Component {
  render() {
    auth.login();

    return (
      <div />
    )
  }
}

export default Login;