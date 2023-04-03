import React from 'react'



import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';


import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Navbarcustom({onAdd}) {
  return (
    <div>

<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">ABC Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Cart</Nav.Link>
            <Nav.Link href="#action3" onClick={onAdd}>Add Product</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Navbarcustom
