import React, { Component } from 'react';
import '../CSS/Header.css'
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';

class Header extends Component {

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
    this.setState({});
  }

  goTo(route) {
    this.props.history.push(`/${route}`)
  }

  render() {
    console.log("is Authenticated:" + this.props.auth.isAuthenticated());
    console.log(this.props.history)

    const { isAuthenticated } = this.props.auth;
    //    <LinkContainer to="/Login">
    //    <NavItem eventKey={3}>Login</NavItem>
    //  </LinkContainer>
    return (

      <Navbar collapseOnSelect className="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            Coolterest
      </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
              <NavItem eventKey={1}>Gallery</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            {
              !isAuthenticated() && (
                <Button
                  onClick={() => this.login()}>
                  Login
              </Button>
              )
            }
            {
              isAuthenticated() && (
                <Nav>
                  <LinkContainer to="/MyCools">
                    <NavItem eventKey={1}>My Cools</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/AddCool">
                    <NavItem eventKey={2}><i className="fa fa-plus"></i></NavItem>
                  </LinkContainer>
                  <Button
                    onClick={() => this.logout()}>
                    Log Out
                  </Button>
                </Nav>
              )
            }

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
};

export default withRouter(Header);