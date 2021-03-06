import React, { Component } from 'react';
import '../CSS/Header.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom';

class Header extends Component {



  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  goTo(route) {
    this.props.history.push(`/${route}`)
  }

  render() {

    const { isAuthenticated } = this.props.auth;
    return (

      <Navbar collapseOnSelect className="navbar">
        <Navbar.Header>
          <LinkContainer to="/Coolterest/">
            <Navbar.Brand>
              Coolterest
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {
              !isAuthenticated() && (
                <NavItem onClick={() => this.login()}>
                  Login
                </NavItem>
              )
            }
            {
              isAuthenticated() && (
                <Nav>
                  <LinkContainer to="/Coolterest/MyCools">
                    <NavItem eventKey={1}>My Cools</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/Coolterest/">
                    <NavItem onClick={() => this.logout()}>
                      Log Out
                    </NavItem>
                  </LinkContainer>
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