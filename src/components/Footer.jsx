import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='mt-5'>
            <Container fluid className="bg-dark text-light py-3">
                <Row>
                    <Col className="text-center">
                        <h2 className='text-warning'>Home</h2>
                        <Link className='text-decoration-none' to='/blog'><h5>Blog</h5></Link>
                        <Link className='text-decoration-none' to='/login'><h5>Login</h5></Link>
                        <Link className='text-decoration-none' to='/register'><h5>Register</h5></Link>
                    </Col>
                    <Col className="text-center">
                        <h2 className='text-warning'>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eos excepturi impedit minima, officia quod cupiditate quasi! Tempore, atque deleniti.</p>
                    </Col>
                    <Col className="text-center text-decoration-none">
                        <h2 className='text-warning'>Contact:</h2>
                        <p>g@gmail.com</p>
                        <p className='mt-0'>555-123-4567</p>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;