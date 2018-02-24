import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import '../CSS/ImageCard.css';

class ImageCard extends Component {

  render() {
    return (
      <div className="imageCard">
        <Thumbnail
          src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Reeipublic_Banana.gif"
          alt="pic">
          <h3 className="imageCardTitle">{this.props.title}</h3>
          <div>
            <p className="imageCardUser">{this.props.user}</p>
          </div>
          <div className="info">
            <a className="left" title="Like">
              <i className="fa fa-thumbs-up"></i>
            </a>
            <p className="date">{this.props.date}</p>
            <a className="right" title="Delete">
              <i className="fa fa-trash"></i>
            </a>
          </div>
        </Thumbnail>
      </div>
    )
  }
}
export default ImageCard;