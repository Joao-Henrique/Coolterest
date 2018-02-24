import React, { Component } from 'react';
import '../CSS/App.css';
import Header from './Header';
import Gallery from './Gallery';
import AddCool from './AddCool';
import Login from './Login';
import CreateAcount from './CreateAcount';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {



  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <div>
            <Route exact path="/" component={Gallery} />
            <Route path="/AddCool" component={AddCool} />
            <Route path="/Login" component={Login} />
            <Route path="/CreateAcount" component={CreateAcount} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;