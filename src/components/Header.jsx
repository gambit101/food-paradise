import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { NavLink } from "react-router-dom";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => { console.error(error) })
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><span className='text-warning fs-3 fw-bold'>Food Paradise</span></Navbar.Brand>
                    <Nav className="ms-auto">

                        <NavLink to='/' style={{ fontWeight: 'bold' }} className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "text-warning text-decoration-none" : "text-white text-decoration-none"
                        } href="#home">Home</NavLink>

                        <div className='ms-4'>
                            <NavLink to='/blog' style={{ fontWeight: 'bold' }} className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "text-warning text-decoration-none" : "text-white text-decoration-none"
                            } href="#home">Blog</NavLink>
                        </div>
                        <div className='ms-4'>
                            <NavLink to='/register' style={{ fontWeight: 'bold' }} className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "text-warning text-decoration-none" : "text-white text-decoration-none"
                            } href="#home">Registration</NavLink>
                        </div>
                        <div className='ms-4'>
                        {user ? <span className='text-white ms-3 '><img style={{ height: '32px' }} className='rounded-5' src={user?.photoURL} alt="" /><button className='ms-3 bg-warning fw-bold p-1 rounded border-0 text-black' onClick={handleLogOut}>Log Out</button></span> : <NavLink to='/login' style={{ fontWeight: 'bold' }} className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "text-warning text-decoration-none" : "text-white text-decoration-none"
                            } href="#home">Login</NavLink>}

                        </div>
                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;