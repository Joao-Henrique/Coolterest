import React, { Component } from 'react';
import ImageCard from './ImageCard';
import { Grid, Row } from 'react-bootstrap';




class Gallery extends Component {

  constructor() {
    super();
    this.state = {
      storedData: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  // Retrieve data from the database
  fetchData() {
    fetch("/api/storedImages")
      .then(response => response.json())
      .then(parsedJSON => this.setState({ storedData: parsedJSON }))
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            {
              this.state.storedData.map(item => {
                return <ImageCard key={item._id} title={item.title} url={item.url} />
              })
            }
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Gallery;