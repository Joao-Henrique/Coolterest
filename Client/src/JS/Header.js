import React, { Component } from 'react';
import '../CSS/Header.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    /* const { isAuthenticated } = this.props.auth; */

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
            <LinkContainer to="/MyCools">
              <NavItem eventKey={1}>My Cools</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/AddCool">
              <NavItem eventKey={2}><i className="fa fa-plus"></i></NavItem>
            </LinkContainer>
            <LinkContainer to="/Login">
              <NavItem eventKey={3}>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
};

export default Header;