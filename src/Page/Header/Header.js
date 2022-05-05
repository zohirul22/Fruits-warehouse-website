import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {

  const [user] = useAuthState(auth);

  const handelSignOut = () => {
    signOut(auth)
  }
  return (
   
      <Navbar sticky='top'  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><i>Fruits Warehouse</i></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#inventory">Inventor</Nav.Link>
              <Nav.Link href="home#categoris">Categories</Nav.Link>
              <Nav.Link href="home#reviews">Review</Nav.Link>
              <Nav.Link href="blog">Blog</Nav.Link>

            
            </Nav>
            {
              user ?
                <button onClick={handelSignOut} className={"btn p-2 btn-info"}>Sign Out</button> :
                <Nav.Link as={Link} to="login" href="#login" className='fs-4'>Login</Nav.Link>}

          </Navbar.Collapse>
        </Container>
      </Navbar>
  
  );
};

export default Header;