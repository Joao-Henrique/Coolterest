import React, { Component } from 'react';
import '../CSS/App.css';
import Header from './Header';
import Gallery from './Gallery';
import MyCools from './MyCools';
import AddCool from './AddCool';
import Login from './Login';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {



  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <div>
            <Route exact path="/" component={Gallery} />
            <Route path="/MyCools" component={MyCools} />
            <Route path="/AddCool" component={AddCool} />
            <Route path="/Login" component={Login} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;