import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (





        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">ENGLISH SKILLS</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button variant="outline-primary">
                                <Link id='link' to='/home'>
                                    Hom
                                </Link>
                            </Button>{' '}
                            <Button variant="outline-danger">
                                <Link id='link' to='/aboutUs'>
                                    AboutUs
                                </Link>
                            </Button>{' '}
                            <Button variant="outline-success">
                                <Link id='link' to='/service'>
                                    Service
                                </Link>
                            </Button>{' '}
                            <Button variant="outline-warning">
                                <Link id='link' to='/contact'>
                                    Contact
                                </Link>
                            </Button>{' '}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;