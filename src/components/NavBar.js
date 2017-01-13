import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import FormBook from "./FormBook";
import { Link } from "react-router"
import { Navbar, Nav , NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const NavBar = (onChange, onSubmit)=> {
  return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> <a>ile-iwe</a></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <FormBook onChange={onChange} onSubmit={onSubmit}/>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} Link to="/login">Login</NavItem>
            <NavItem eventKey={2} Link to="/login">Signup</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

NavBar.propTypes = {
  onChange: React.PropTypes.func,
  onSubmit: React.PropTypes.func
}

export default NavBar;
