import { Container, Row, Button, Col } from 'react-bootstrap';

const Error = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <Row className='justify-content-center'>
                <Col className='text-center'>
                    <div className='mb-5'><h1>ERROR 404 NOT FOUND</h1></div>
                    <div className='mb-5'><h3>Esta página no existe.</h3></div>
                    <Button size='lg' variant='success' href="/">Volver a la página principal</Button>
                </Col>
            </Row>
        </Container >

    );
}

export default Error;