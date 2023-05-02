import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    return (
        <div className='mt-5'>
            <Form className='w-50 ms-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-warning'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-warning'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-warning'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='text-warning' type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
                <br />
                <Button className='mt-3' variant="warning" type="submit"><FaGoogle></FaGoogle> Login With Google
                </Button>
                <br />
                <Button className='mt-3' variant="warning" type="submit"><FaGithub></FaGithub> Login With Github
                </Button>

                {/* <p className='text-warning mt-3'>Don't have an account? <Link to='/register'>Register</Link> </p> */}

            </Form>
        </div>
    );
};

export default Register;