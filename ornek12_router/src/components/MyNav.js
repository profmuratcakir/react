import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <div>
      <Navbar className="p-4" bg="light" variant="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/kurslar" className="nav-link">
              Kurslar
            </Link>
            <Link to="/kisiler" className="nav-link">
              Kişiler
            </Link>
            <Link to="/iletisim" className="nav-link">
              İletişim
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;
