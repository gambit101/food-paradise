import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(result =>{})
        .catch(error =>{console.error(error)})
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><span className='text-warning fs-3 fw-bold'>Food Paradise</span></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Link to='/' className='text-decoration-none text-white ms-3'   href="#home">Home</Link>
                        <Link to='/blog' className='text-decoration-none text-white ms-3' href="#features">Blog</Link>
                        <Link to='/login' className='text-decoration-none text-white ms-3'  href="#pricing">Login</Link>
                        {user && <span className='text-white ms-3'>{user.photoURL}<button className='ms-3 bg-warning fw-bold p-1 rounded border-0' onClick={handleLogOut}>Sign Out</button></span>}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;