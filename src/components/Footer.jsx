import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='mt-5'>
            <Container fluid className="bg-dark text-light py-3">
                <Row>
                    <Col className="text-center">
                        <h2 className='text-warning'>Go To</h2>
                        <Link className='text-decoration-none' to='/'><p>Home</p></Link>
                        <Link className='text-decoration-none' to='/blog'><p>Blog</p></Link>
                        <Link className='text-decoration-none' to='/login'><p>Login</p></Link>
                        <Link className='text-decoration-none' to='/register'><p>Register</p></Link>
                    </Col>
                    <Col className="text-center">
                        <h2 className='text-warning'>About Us</h2>
                        <p>To help the business grow, Veaceslav participated in the 2021 grants competition announced by the “EU4Moldova: Focal Region” programme, funded by the EU and implemented by UNDP and UNICEF. As a result, he received approximately €25,000 for the purchase of various equipment installed in the restaurant, warehouse, bakery, and semi-finished products production point. Currently,</p>
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