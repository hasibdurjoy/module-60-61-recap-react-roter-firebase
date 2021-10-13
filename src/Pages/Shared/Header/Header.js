import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Genius Car Mechanic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="btn btn-danger rounded-pill text-light me-3">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="btn btn-danger rounded-pill text-light me-3">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts" className="btn btn-danger rounded-pill text-light me-3">Experts</Nav.Link>
                        {
                            !user?.email ? <>
                                <Nav.Link as={Link} to="/login" className="btn btn-primary rounded-pill text-light me-3">LogIN</Nav.Link>
                                <Nav.Link as={Link} to="/login" className="btn btn-secondary rounded-pill text-light me-3">Register</Nav.Link>
                            </>
                                :
                                <Nav.Link onClick={logOut} as={Link} to="/home" className="btn btn-danger rounded-pill text-light me-3">Log out</Nav.Link>
                        }
                        <Navbar.Text>
                            <a href="#login" className="text-danger fs-4">{user?.displayName}</a>
                            <img src={user.photoURL} alt="" className="rounded-circle ms-3" height="35px" />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;