import React, { Component } from 'react';
import { Thumbnail, Button } from 'react-bootstrap';
import '../CSS/ImageCard.css';

class ImageCard extends Component {



  render() {

    const deleteImageCardFromDatabase = () => {
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
            <p className="imageCardUser">by {this.props.user}</p>
          </div>
          <div className="info">
            <p className="date">{this.props.date}</p>
            {
              this.props.showDeleteButton && (
                <Button bsSize="xsmall" className="right" title="Delete" onClick={deleteImageCardFromDatabase}>
                  <i className="fa fa-trash"></i>
                </Button>
              )
            }
          </div>
        </Thumbnail>
      </div>
    )
  }
}
export default ImageCard;