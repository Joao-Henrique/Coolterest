import React, { Component } from 'react';
import loading from './loading.svg';
import { withRouter } from 'react-router-dom';

class Callback extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.history.replace('/MyCools');
    }, 1000);
  }

  render() {

    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    }


    return (
      <div style={style}>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default withRouter(Callback);