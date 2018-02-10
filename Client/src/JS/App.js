import React, { Component } from 'react';
import '../CSS/App.css';
import Header from './Header';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/message');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;