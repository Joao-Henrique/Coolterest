import React from 'react';
import '../CSS/Header.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
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
        <LinkContainer to="/AddCool">
          <NavItem eventKey={2}><i className="fa fa-plus"></i></NavItem>
        </LinkContainer>
        <LinkContainer to="/Login">
          <NavItem eventKey={3}>Login</NavItem>
        </LinkContainer>
        <LinkContainer to="/CreateAcount">
          <NavItem eventKey={4}>Create Acount</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;