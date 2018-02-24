import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../CSS/Forms.css';

class AddCool extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleTileChange = this.handleTileChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: '',
      url: '',
      user: 'Current User',
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
    this.sendToDatabase();
  }

  // send user posted data to the database
  sendToDatabase() {
    fetch('http://localhost:3000/api/storedImages/', {
      method: 'POST',
      mode: 'CORS',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        url: this.state.url,
        user: this.state.user,
        date: this.state.date
      })
    })
  }

  render() {
    return (
      <div>
        <div className="formBox">
          <h1 className="addCool">Add your Cool:</h1>
          <form onSubmit={this.handleSubmit}>

            {/* Title */}
            <FormGroup
              controlId="formTitle"
              validationState={this.getValidationState()}>
              <ControlLabel className="controlLable">Title:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.title}
                placeholder="Exemple: AWESOME COOL"
                onChange={this.handleTileChange} />
              <FormControl.Feedback />
            </FormGroup>

            {/* URL */}
            <FormGroup
              controlId="formURL"
              validationState={this.getValidationState()}>
              <ControlLabel className="controlLable">URL:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.url}
                placeholder="Exemple: https://Banana_Image.gif"
                onChange={this.handleUrlChange} />
              <FormControl.Feedback />
            </FormGroup>

            <div className="addCoolButtonDiv">
              <Button className="addCoolButton" bsSize="large" type="submit">Save</Button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default AddCool;