import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

import React from 'react';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Header = () => {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'>
      <Container fluid>
        <NavbarBrand
          href='/'
          style={{ color: 'gold' }}>
          <FontAwesomeIcon icon={faVideoSlash} />
          TMDB API
        </NavbarBrand>
        <NavbarToggle aria-controls='navbarScroll' />
        <NavbarCollapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <NavLink
              className='nav-link'
              to='/'>
              Home
            </NavLink>
            <NavLink
              className='nav-link'
              to='/watchList'>
              Watch List
            </NavLink>
          </Nav>
          <Button
            variant='outline-info'
            className='me-2'>
            Login
          </Button>
          <Button variant='outline-info'>Register</Button>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;
