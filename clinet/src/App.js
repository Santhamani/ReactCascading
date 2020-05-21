import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import Routes from "./route";


function App() {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          <NavItem href="/test">Test</NavItem>
            <NavItem href="/data">Data</NavItem>
            <NavItem href="/signup">Signup</NavItem>
            {/* <NavItem href="/login">Login</NavItem> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
