import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailref = useRef('');
    const passwordref = useRef('');
    const navigate = useNavigate()


    const handelAddToSubmit = (event) => {
        event.preventDefault();
        const email = emailref.current.value;
        const password = passwordref.current.value;

        console.log(email, password)
    }

    const navigateRegister = (event) => {
        navigate('/registar')
    }




    return (
        <div id='login' className="mx-auto w-50" style={{ height: "100vh" }}>
            <h1 className='text-center my-5  text-danger'> please Login</h1>
            <div>
                <Form onSubmit={handelAddToSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailref} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordref} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <p className='text-success'>Fruits Warehouse? <Link to={'/registar'} className='text-danger fs-4 ' onClick={navigateRegister} >Please Registar</Link> </p>
            </div>
        </div>
    );
};

export default Login;