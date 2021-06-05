import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "./img/logo.png";

// !Lokal resimleri gosterilbilmek icin imporrt yontemiyle eklemek gerekiyor. Aksi taktirde resimler gozukmuyor.

function MyNav() {
  return (
    <div>
      <Navbar className="p-4" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Dersler</Nav.Link>
            <NavDropdown title="Kurslar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Web Dev</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Java Dev</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">DevOps</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;
