import React, { Component } from "react";
import { ReactComponent as Logo} from "../../logo.svg";
import {
  NavLink,
  Link,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header-component">
          <Navbar.Brand href="#home">
            <Logo
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Doodle
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    );
  }
}
