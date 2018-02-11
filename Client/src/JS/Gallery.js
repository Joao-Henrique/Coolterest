import React, { Component } from 'react';
import ImageCard from './ImageCard';
import { Grid, Row, Col } from 'react-bootstrap';


class Gallery extends Component {

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} sm={4} md={3}>
              <ImageCard />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <ImageCard />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <ImageCard />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <ImageCard />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <ImageCard />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <ImageCard />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <ImageCard />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <ImageCard />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <ImageCard />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <ImageCard />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <ImageCard />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <ImageCard />
            </Col>
          </Row>
        </Grid>;
      </div>
    );
  }
}

export default Gallery;