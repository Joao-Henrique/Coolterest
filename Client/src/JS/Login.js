import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../CSS/Forms.css';

class Login extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleTileChange = this.handleTileChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: '',
      url: '',
      user: '',
      date: new Date().toLocaleDateString(),
    };
  }

  getValidationState() {
    const titleLength = this.state.title.length;
    const urlLength = this.state.url.length;
    if (titleLength > 1 && urlLength > 4) return 'success';
    return null;
  }

  handleTileChange(e) {
    this.setState({ title: e.target.value });
  }

  handleUrlChange(e) {
    this.setState({ url: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className="formBox">
          <form onSubmit={this.handleSubmit}>

            {/* User Name */}
            <FormGroup
              controlId="formTitle"
              validationState={this.getValidationState()}>
              <ControlLabel className="controlLable">User Name:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.title}
                placeholder="User Name"
                onChange={this.handleTileChange} />
              <FormControl.Feedback />
            </FormGroup>

            {/* Password */}
            <FormGroup
              controlId="formURL"
              validationState={this.getValidationState()}>
              <ControlLabel className="controlLable">Password:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.url}
                placeholder="Password"
                onChange={this.handleUrlChange} />
              <FormControl.Feedback />
            </FormGroup>

            <div className="addCoolButtonDiv">
              <Button className="addCoolButton" bsSize="large" type="submit">Log in</Button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default Login;