import React, { Component } from 'react';
import { Thumbnail, Button } from 'react-bootstrap';
import '../CSS/ImageCard.css';

class ImageCard extends Component {

  deleteImageCardFromDatabase() {
    fetch("https://glacial-river-12236.herokuapp.com/api/storedImages/" + this.props.id, {
      method: 'DELETE',
      mode: 'CORS'
    }).then(res => res)
      .catch(err => err)
      .then(this.setState({ something: "" }));
  }

  render() {

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
                <Button bsSize="xsmall"
                  className="right"
                  title="Delete"
                  onClick={() => {
                    this.deleteImageCardFromDatabase();
                    setTimeout(() => {
                      this.props.action();
                    }, 1000)
                  }
                  }>
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