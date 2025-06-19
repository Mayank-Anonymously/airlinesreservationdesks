import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiCustomerServiceFill } from "react-icons/ri";
import CallNowBanner from './Callbtn';
import Link from 'next/link';
const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"><img src="/assets/logo/flightsreservationsweb.png" className='logo-img' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" className="menu-link nav-link">Home</Link>
              <Link href="/about-us" className="menu-link nav-link">About </Link>
              <Link href="/contact-us" className="menu-link nav-link"> Contact </Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>

          <CallNowBanner />
        </Container>
      </Navbar>

    </header>
  )
}

export default Header
