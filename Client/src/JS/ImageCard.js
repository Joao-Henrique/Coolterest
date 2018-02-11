import React from 'react';
import { Thumbnail } from 'react-bootstrap';
import '../CSS/ImageCard.css';

const ImageCard = () => (
  <div className="imageCard">
    <Thumbnail
      src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Reeipublic_Banana.gif"
      alt="pic">
      <h3>Some Title</h3>
      <div className="info">
        <p>User Name</p>
        <p>Post Date</p>
      </div>
      <p className="buttons">
        <a className="button left" title="Like">
          <i className="fa fa-thumbs-up"></i>
        </a>
        <a className="button right" title="Delete">
          <i className="fa fa-trash"></i>
        </a>
      </p>
    </Thumbnail>
  </div>
);

export default ImageCard;