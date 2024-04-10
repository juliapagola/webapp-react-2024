import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Alert, Row, Container, Col } from 'react-bootstrap';
import eyeClosed from '../Componentes/Imagenes/ojo-tachado.png';
import eyeOpen from '../Componentes/Imagenes/ojo-abierto.png';
import axios from 'axios';
import { MD5 } from 'crypto-js';
import AutContext from './AutContext';
import { useNavigate } from 'react-router-dom';

const Registrarse = (props) => {
    const navigate = useNavigate();
    const contextAut = useContext(AutContext);
    const [userID, setUserID] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [sending, setSending] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email.includes('.') || email.indexOf('@') === -1) {
            setError('Por favor, introduce un email válido.');
            return;
        }

        if (password.length < 8 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            setError('La contraseña debe tener al menos 8 caracteres y contener al menos una mayúscula, una minúscula y un número.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        const userIDExists = await checkUserIDExists(userID);
        if (userIDExists) {
            setError('El nombre de usuario ya está en uso.');
            return;
        }

        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            setError('El email ya está en uso.');
            return;
        }


        if (sending) {
            return;
        }
        setSending(true);

        const usuario = {
            userID: userID,
            email: email,
            password: MD5(password).toString()
        };

        try {
            await axios.post('https://webapp-react-2024-dsm-default-rtdb.europe-west1.firebasedatabase.app/usuarios.json', usuario);
            setSubmitted(true);
            props.actualizarLogin(true, userID);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setError('Ha ocurrido un error al enviar el formulario.');
        } finally {
            setSending(false);
        }
    };

    const checkUserIDExists = async (userID) => {
        try {
            const response = await axios.get(`https://webapp-react-2024-dsm-default-rtdb.europe-west1.firebasedatabase.app/usuarios.json?orderBy="userID"&equalTo="${userID}"`);
            return response.data && Object.keys(response.data).length > 0;
        } catch (error) {
            console.error('Error al verificar el userID:', error);
            return false;
        }
    };

    const checkEmailExists = async (email) => {
        try {
            const response = await axios.get(`https://webapp-react-2024-dsm-default-rtdb.europe-west1.firebasedatabase.app/usuarios.json?orderBy="email"&equalTo="${email}"`);
            return response.data && Object.keys(response.data).length > 0;
        } catch (error) {
            console.error('Error al verificar el email:', error);
            return false;
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    useEffect(() => {
        if (contextAut.login && !submitted) {
            navigate('/');
        }
    }, [contextAut.login, navigate, submitted]);

    return (
        <>
            {!submitted ? (
                <Container className="d-flex justify-content-center align-items-center" style={{ height: '550px' }}>
                    <Col md={5} className="px-3">
                        <h2 className='mb-4'>Registrarse</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3' controlId="formUserID">
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <Form.Control type="text" placeholder="Introducir usuario" value={userID} onChange={(event) => setUserID(event.target.value)} required minLength={3} />
                            </Form.Group>

                            <Form.Group className='mb-3' controlId="formBasicEmail">
                                <Form.Label>Dirección Email</Form.Label>
                                <Form.Control type="email" placeholder="Introducir email" value={email} onChange={(event) => setEmail(event.target.value)} required />
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

                            <Form.Group className='mb-3' controlId="formBasicConfirmPassword">
                                <Form.Label>Confirmar Contraseña</Form.Label>
                                <div className="password-input d-flex align-items-center">
                                    <Form.Control type={showConfirmPassword ? "text" : "password"} placeholder="Confirmar contraseña" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
                                    <Button className="password-toggle-btn" style={{ marginLeft: '20px' }} variant="outline-secondary" onClick={toggleShowConfirmPassword}>
                                        <img src={showConfirmPassword ? eyeClosed : eyeOpen} alt={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"} style={{ width: '20px', height: '20px' }} />
                                    </Button>
                                </div>
                            </Form.Group>
                            {error && <Alert className='mb-3' variant="danger">{error}</Alert>}
                            <div className="text-center">
                                <Button variant="success" type="submit" disabled={sending}>
                                    {sending ? 'Enviando...' : 'Registrarse'}
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Container>
            ) : (
                <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                    <Row className='justify-content-center'>
                        <Col className='text-center'>
                            <div className='mb-5'><h1>¡Registrado con éxito!</h1></div>
                            <div className='mb-5'><h3>¡Bienvenido {contextAut.userID}!</h3></div>
                            <Button size='lg' variant='success' href="/">Volver a la página principal</Button>
                        </Col>
                    </Row>
                </Container >
            )
            }
        </>
    );
};

export default Registrarse;
