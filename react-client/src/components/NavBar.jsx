import React from 'react';
import {Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const NavBar = (props) => {
  return (<div><Navbar fixedTop inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#" className="title" onClick={() => {props.setStore({view: 'home'})}}>Byte!</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        {((props.loggedIn) ? <NavItem eventKey={1} href="#" onClick={() => { props.setStore({view: 'favorites'})}}>Favorites</NavItem> : null)}
        <NavItem eventKey={2} href="#" onClick={props.modalLogin} >{(props.loggedIn) ? props.username : "Log In"}</NavItem>
        <NavItem eventKey={3} href="#" onClick={props.modalSignup}>{(props.loggedIn) ? "Log Out" : "Sign Up"}</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar></div>);
};

export default NavBar;
