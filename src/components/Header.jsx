import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><span className='text-warning fs-3 fw-bold'>Food Paradise</span></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Link to='/' className='text-decoration-none text-white ms-3'   href="#home">Home</Link>
                        <Link to='/blog' className='text-decoration-none text-white ms-3' href="#features">Blog</Link>
                        <Link to='/login' className='text-decoration-none text-white ms-3'  href="#pricing">Login</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;