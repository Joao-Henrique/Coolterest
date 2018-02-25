import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import '../CSS/ImageCard.css';

class ImageCard extends Component {



  render() {

    const handleClick = () => {
      fetch("/api/storedImages/" + this.props.id, {
        method: 'DELETE',
        mode: 'CORS'
      }).then(res => res)
        .catch(err => err)
        .then(window
          .location
          .reload(true));
    }

    return (
      <div className="imageCard">
        <Thumbnail
          src={this.props.url}
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
            <a className="right" title="Delete" onClick={handleClick}>
              <i className="fa fa-trash"></i>
            </a>
          </div>
        </Thumbnail>
      </div>
    )
  }
}
export default ImageCard;