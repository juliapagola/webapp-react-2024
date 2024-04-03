import { Container, Button, Row, Col } from 'react-bootstrap';

const Agradecimiento = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <Row className='justify-content-center'>
                <Col className='text-center'>
                    <div className='mb-5'><h1>¡Muchas gracias por su pedido!</h1></div>
                    <Button size='lg' variant='success' href="/">Volver a la página principal</Button>
                </Col>
            </Row>
        </Container >
    )
}

export default Agradecimiento;
