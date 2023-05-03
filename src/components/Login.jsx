import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { AuthContext } from './providers/AuthProvider';

const Login = () => {


    const {signIn} = useContext(AuthContext);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleLogIn = event =>{
        event.preventDefault();

        const form = event.target;
        const email= form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            // navigate('/')
        })
        .catch(error =>{
            console.log(error);
            // setError(error.message)
        })
    }

    const handleGoogleSignIn = () => {
        event.preventDefault()
        console.log('google');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleGithubSignIn = () => {
        event.preventDefault()
        console.log('google');
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    return (
        <div className='mt-5 container'>
            <Form onSubmit={handleLogIn} className='w-50 ms-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-warning'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-warning'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='text-warning' type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
                <br />
                <Button onClick={handleGoogleSignIn} className='mt-3' variant="warning" ><FaGoogle></FaGoogle> Login With Google
                </Button>
                <br />
                <Button onClick={handleGithubSignIn} className='mt-3' variant="warning" type="submit"><FaGithub></FaGithub> Login With Github
                </Button>

                <p className='text-warning mt-3'>Don't have an account? <Link to='/register'>Register</Link> </p>

            </Form>
        </div>
    );
};

export default Login;