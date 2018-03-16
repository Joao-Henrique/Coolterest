import React, { Component } from 'react';
import ImageCard from './ImageCard';
import Masonry from 'react-masonry-component';

var masonryOptions = {
  transitionDuration: 300,
  gutter: 12
};

class Gallery extends Component {

  constructor() {
    super();
    this.state = {
      storedData: []
    }
  }

  // Retrieve data from the database
  fetchData() {
    fetch("https://glacial-river-12236.herokuapp.com/api/storedImages")
      .then(response => response.json())
      .then(parsedJSON => this.setState({ storedData: parsedJSON }))
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {

    const childElements = this.state.storedData.map(item => {
      return (
        <ImageCard key={item._id} id={item._id} title={item.title} url={item.url} user={item.user} date={item.date} />
      );
    });

    return (
      <Masonry
        className={'my-gallery-class'} // default ''
        elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      >
        {childElements}
      </Masonry>
    )
  }
}

export default Gallery;