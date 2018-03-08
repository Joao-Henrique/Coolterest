import React, { Component } from 'react';
import ImageCard from './ImageCard';
import Masonry from 'react-masonry-component';
import { FormGroup, ControlLabel, FormControl, Button, Modal, } from 'react-bootstrap';

var masonryOptions = {
  transitionDuration: 300,
  gutter: 10
};

class Gallery extends Component {

  constructor() {
    super();

    this.handleTileChange = this.handleTileChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      storedData: [],
      profile: {},
      showModal: false,
      title: '',
      url: '',
      user: '',
      date: new Date().toLocaleDateString()
    }
  }

  // Retrieve user data from the database
  fetchData() {
    fetch("/api/storedImages/" + this.state.user)
      .then(response => response.json())
      .then(parsedJSON => this.setState({ storedData: parsedJSON }))
  }


  // Retrieve user information from Auth0
  getUserProfile() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({
        profile: userProfile,
      });
    }
  }

  // Modal Handlers
  handleClose() {
    this.setState({ showModal: false });
  }
  handleShow() {
    this.setState({ showModal: true, user: this.state.profile.name });
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
  getValidationState() {
    const titleLength = this.state.title.length;
    const urlLength = this.state.url.length;
    if (titleLength > 1 && urlLength > 4) return 'success';
    return null;
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

  componentWillMount() {
    this.fetchData();
    this.getUserProfile();
  }

  componentWillUnmount() {
    this.setState({ profile: {} });
  }

  render() {

    const childElements = this.state.storedData.map(item => {
      return (
        <ImageCard
          key={item._id}
          id={item._id}
          title={item.title}
          url={item.url}
          user={item.user}
          date={item.date}
          showDeleteButton={true} />
      );
    });

    return (
      <div>
        <div className="myCoolsHeader">
          <h1>{this.state.profile.name + "'s Cools!"}</h1>
          <Button className="addCoolButton" bsStyle="primary" bsSize="large" onClick={() => this.handleShow()}>
            Add New Cool
        </Button>
        </div>
        <Modal show={this.state.showModal} onHide={() => this.handleClose()}>

          <Modal.Body>

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
            <img className="imagePreview" src={this.state.url} alt="" />
            <Button onClick={this.handleSubmit}>Save</Button>
            <Button onClick={() => this.handleClose()}>Close</Button>
          </Modal.Body>
        </Modal>


        <Masonry
          className={'my-gallery-class'} // default ''
          elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
          {childElements}
        </Masonry>
      </div >
    )
  }
}

export default Gallery;