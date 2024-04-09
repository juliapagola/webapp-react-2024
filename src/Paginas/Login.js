import React, { useState } from 'react';
import { Form, Button, Alert, Row, Container, Col } from 'react-bootstrap';
import eyeClosed from '../Componentes/Imagenes/ojo-tachado.png';
import eyeOpen from '../Componentes/Imagenes/ojo-abierto.png';
import axios from 'axios';
import { MD5 } from 'crypto-js';

const Login = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [sending, setSending] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (sending) {
            return;
        }
        setSending(true);

        try {
            const response = await axios.get(`https://webapp-react-2024-dsm-default-rtdb.europe-west1.firebasedatabase.app/usuarios.json?orderBy="userID"&equalTo="${userID}"&equalTo="${MD5(password).toString()}"`);
            const userData = response.data;
            if (userData && Object.keys(userData).length > 0) {
                setSubmitted(true);
            } else {
                setError('Nombre de usuario o contraseña incorrectos.');
            }
        } catch (error) {
            console.error('Error al verificar el usuario y la contraseña:', error);
            setError('Ha ocurrido un error al verificar el usuario y la contraseña.');
        } finally {
            setSending(false);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            {!submitted ? (
                <Container className="d-flex justify-content-center align-items-center" style={{ height: '550px' }}>
                    <Col md={5} className="px-3">
                        <h2 className='mb-4'>Iniciar sesión</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3' controlId="formUserID">
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <Form.Control type="text" placeholder="Introducir usuario" value={userID} onChange={(event) => setUserID(event.target.value)} required />
                            </Form.Group>

                            <Form.Group className='mb-3' controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <div className="password-input d-flex align-items-center">
                                    <Form.Control type={showPassword ? "text" : "password"} placeholder="Introducir contraseña" value={password} onChange={(event) => setPassword(event.target.value)} required />
                                    <Button className="password-toggle-btn" style={{ marginLeft: '20px' }} variant="outline-secondary" onClick={toggleShowPassword}>
                                        <img src={showPassword ? eyeClosed : eyeOpen} alt={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"} style={{ width: '20px', height: '20px' }} />
                                    </Button>
                                </div>
                            </Form.Group>

                            {error && <Alert className='mb-3' variant="danger">{error}</Alert>}
                            <div className="text-center">
                                <Button variant="success" type="submit" disabled={sending}>
                                    {sending ? 'Comprobando...' : 'Iniciar sesión'}
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Container>
            ) : (
                <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                    <Row className='justify-content-center'>
                        <Col className='text-center'>
                            <div className='mb-5'><h1>¡Inicio de sesión exitoso!</h1></div>
                            <Button size='lg' variant='success' href="/">Volver a la página principal</Button>
                        </Col>
                    </Row>
                </Container >
            )
            }
        </>
    );
};

export default Login;
