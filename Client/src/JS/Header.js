import React from 'react';
import '../CSS/Header.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

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
        <NavItem eventKey={1} href="/">
          Home
        </NavItem>
        <NavItem eventKey={2} href="/TestDatabase">
          TestDatabase
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2} href="/AddCool">
          <div title="Add Cool">
            <i className="fa fa-plus"></i>
          </div>
        </NavItem>
        <NavItem eventKey={1} href="#">
          Sign In
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;