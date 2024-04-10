import { Button, Row, Container, Col } from 'react-bootstrap';

const Logout = (props) => {
    props.actualizarLogin(false, '');
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <Row className='justify-content-center'>
                <Col className='text-center'>
                    <div className='mb-5'><h1>Has cerrado sesión.</h1></div>
                    <div className='mb-5'><h3>¡Hasta pronto!</h3></div>
                    <Button size='lg' variant='success' href="/">Volver a la página principal</Button>
                </Col>
            </Row>
        </Container >
    );
}

export default Logout;
