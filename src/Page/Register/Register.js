import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Social from '../Social/Social';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();


    const handelAddToSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    }


    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home')
    }

    let errorHandel;
    if (user) {
        errorHandel =
            <div>
                <p className='text-danger'>Error: {error?.message}</p>
            </div>
            ;
    }


    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center  text-success'>Registar</h1>
            <Form onSubmit={handelAddToSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                {errorHandel}
                <Button className='mx-auto d-block w-50' variant="primary" type="submit">
                    <span >Registar</span>
                </Button>
            </Form>
            <p className='text-success'>Already have an account? <Link to={'/login'}
                className='text-danger fs-4 ' onClick={navigateLogin} >Please Login</Link> </p>

            <Social></Social>
        </div>
    );
};

export default Register;