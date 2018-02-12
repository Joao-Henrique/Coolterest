import React from 'react';
import { Thumbnail } from 'react-bootstrap';
import '../CSS/ImageCard.css';

const ImageCard = () => (
  <div className="imageCard">
    <Thumbnail
      src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Reeipublic_Banana.gif"
      alt="pic">
      <h3>Some Title</h3>
      <div>
        <p>User Name</p>
      </div>
      <div className="info">
        <a className="left" title="Like">
          <i className="fa fa-thumbs-up"></i>
        </a>
        <p className="date">Post Date</p>
        <a className="right" title="Delete">
          <i className="fa fa-trash"></i>
        </a>
      </div>
    </Thumbnail>
  </div>
);

export default ImageCard;