import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from './providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;

        console.log(email, password, confirm, name);

        setError('');
        if (password !== confirm) {
            setError('your pass didnt match');
            return
        }
        else if (password.length < 6) {
            setError('pass must be more than 6 characters')
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    return (
        <div className='mt-5'>
            <Form onSubmit={handleSignUp} className='w-50 ms-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-warning'>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-warning'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-warning'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-warning'>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='text-warning'>photoURL</Form.Label>
                    <Form.Control type="text" placeholder="photoURL" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='text-warning' type="checkbox" label="Check me out" />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
                <br />
                {/* <Button className='mt-3' variant="warning" type="submit"><FaGoogle></FaGoogle> Login With Google
                </Button>
                <br />
                <Button className='mt-3' variant="warning" type="submit"><FaGithub></FaGithub> Login With Github
                </Button> */}

                {/* <p className='text-warning mt-3'>Don't have an account? <Link to='/register'>Register</Link> </p> */}

            </Form>
        </div>
    );
};

export default Register;