import React, { Component } from 'react';
import ImageCard from './ImageCard';
import Masonry from 'react-masonry-component';
import { Button, Modal, } from 'react-bootstrap';

var masonryOptions = {
  transitionDuration: 300,
  gutter: 10
};

class Gallery extends Component {

  constructor() {
    super();
    this.state = {
      storedData: [],
      profile: {},
      show: false
    }
  }

  // Opens and Closes the Modal
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }

  // Gets uses information
  getUserProfile() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  // Retrieve data from the database
  fetchData() {
    fetch("/api/storedImages")
      .then(response => response.json())
      .then(parsedJSON => this.setState({ storedData: parsedJSON }))
  }

  componentDidMount() {
    this.fetchData();
    this.getUserProfile();
  }

  componentWillUnmount() {
    this.setState({ profile: {} });
  }

  render() {
    console.log(this.state)
    const childElements = this.state.storedData.map(item => {
      return (
        <ImageCard
          key={item._id}
          id={item._id}
          title={item.title}
          url={item.url}
          user={item.user}
          date={item.date} />
      );
    });

    return (
      <div>
        <h1>{this.state.profile.name + "'s Cools!"}</h1>


        <Button bsStyle="primary" bsSize="large" onClick={() => this.handleShow()}>
          Launch demo modal
        </Button>
        <Modal show={this.state.show} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleSave()}>Save</Button>
            <Button onClick={() => this.handleClose()}>Close</Button>
          </Modal.Footer>
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