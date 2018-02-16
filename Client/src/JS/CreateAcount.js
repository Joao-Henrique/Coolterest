import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../CSS/Forms.css';

class CreateAcount extends Component {

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
          <h1 className="addCool">Create Acount:</h1>
          <form onSubmit={this.handleSubmit}>

            {/* Title */}
            <FormGroup
              controlId="formTitle"
              validationState={this.getValidationState()}>
              <ControlLabel className="controlLable">UserName:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.title}
                placeholder="Exemple: Cool Peep"
                onChange={this.handleTileChange} />
              <FormControl.Feedback />
            </FormGroup>

            {/* URL */}
            <FormGroup
              controlId="formURL"
              validationState={this.getValidationState()}>
              <ControlLabel className="controlLable">Password:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.url}
                placeholder="Exemple: 123456"
                onChange={this.handleUrlChange} />
              <FormControl.Feedback />
            </FormGroup>

            <div className="addCoolButtonDiv">
              <Button className="addCoolButton" bsSize="large" type="submit">Create</Button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default CreateAcount;