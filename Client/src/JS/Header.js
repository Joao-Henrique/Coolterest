import React from 'react';
import '../CSS/Header.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

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
        <NavItem eventKey={1}>
          <Link to="/">Gallery</Link>
        </NavItem>
        <NavItem eventKey={2} href="/TestDatabase">
          TestDatabase
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2}>
          <div title="Add Cool"><Link to="/AddCool"><i className="fa fa-plus"></i></Link>
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