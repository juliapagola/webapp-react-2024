import { Container, Row, Col } from 'react-bootstrap';

const SobreNosotros = () => {
    return (
        <Container style={{ height: '100vh' }}>
            <h1>Sobre nosotros</h1>
            <Row>
                <Col md={7} className="px-3 m-1">
                    <div><h3>Dirección: </h3></div>
                    <h5>Travesía Raúl Soliz 11, 37447, Castilla y León, Rollán, España</h5>
                    <div className='mt-5'><h3>Personas cofundadadoras: </h3></div>
                    <h5>Julia Pagola y Adrián Amatriain</h5>
                </Col>
            </Row>
        </Container >


    )
}

export default SobreNosotros;
