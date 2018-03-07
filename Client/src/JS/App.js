import React, { Component } from 'react';
import '../CSS/App.css';
import Header from './Header';
import Gallery from './Gallery';
import MyCools from './MyCools';
import AddCool from './AddCool';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from '../Auth/Auth';
import Callback from '../Callback/Callback';
import history from '../Auth/history';



const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {


  render() {
    //    <Route exact path="/Login" component={Login} />

    return (
      <Router history={history}>
        <div className="App">
          <Header auth={auth} {...this.props} />

          <div>
            <Route exact path="/home" render={(props) => <Gallery auth={auth} {...props} />} />
            <Route exact path="/MyCools" render={(props) => <MyCools auth={auth} {...props} />} />
            <Route exact path="/AddCool" render={(props) => <AddCool auth={auth} {...props} />} />

            <Route exact path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;