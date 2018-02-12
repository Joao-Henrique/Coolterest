import React, { Component } from 'react';
import '../CSS/App.css';
import Header from './Header';
import Gallery from './Gallery';
import AddCool from './AddCool';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
        <p className="App-intro">{this.state.response}</p>
        <Router>
          <div>
            <Link to="/">Gallery</Link>
            <Link to="/AddCool">AddCool</Link>
            <Route exact path="/" component={Gallery} />
            <Route path="/AddCool" component={AddCool} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;