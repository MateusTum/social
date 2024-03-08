import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import styles from './login_styles.module.scss'

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <Container className={styles['login-page']}>
            <Row>
                <Col>
                    <h1>Login Page</h1>
                    <Form onSubmit={handleSubmit} className={styles['login-form']}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" value={email} onChange={handleEmailChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" value={password} onChange={handlePasswordChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;