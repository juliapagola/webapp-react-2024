import { useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ResumenCarrito from "../Productos/ResumenCarrito";

function DireccionDeEntrega(props) {
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [pais, setPais] = useState('España');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [datosAdicionales, setDatosAdicionales] = useState('');
    const [observaciones, setObservaciones] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [poblacion, setPoblacion] = useState('');
    const [provincia, setProvincia] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (sending) {
            return;
        }
        setSending(true);

        const carrito = props.carrito;
        const pedido = {
            cliente: {
                nombre: nombre,
                apellidos: apellidos,
                pais: pais,
                telefono: telefono,
                direccion: direccion,
                datosAdicionales: datosAdicionales,
                observaciones: observaciones,
                codigoPostal: codigoPostal,
                poblacion: poblacion,
                provincia: provincia,
                userID: 'props.userID'
            },
            carrito: {}
        };

        carrito.forEach(item => {
            pedido.carrito[item.id] = {
                nombre: item.nombre,
                cantidad: item.cantidad,
                precio: item.precio
            };
        });

        try {
            await axios.post('https://webapp-react-2024-dsm-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json', pedido);
            setSubmitted(true);
        } catch (error) {
            setError(true);
        } finally {
            setSending(false);
        }
    };
    if (submitted) {
        //props.vaciarCarrito();
        navigate('/agradecimiento');
    }

    return (
        <Container className="my-3" fluid="md">
            <h2 className='mb-4'>Dirección de entrega</h2>
            <Row className="justify-content-between">
                <Col md={7} className="px-3 m-1">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row}>
                            <Form.Group as={Col} controlId="nombre">
                                <Form.Label>Nombre*</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} required minLength={2} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="apellidos">
                                <Form.Label>Apellidos*</Form.Label>
                                <Form.Control type="text" placeholder="Apellidos" value={apellidos} onChange={(event) => setApellidos(event.target.value)} required minLength={2} />
                            </Form.Group>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Group as={Col} controlId="pais">
                                <Form.Label>País*</Form.Label>
                                <Form.Control type="text" placeholder="España" value={pais} onChange={(event) => setPais(event.target.value)} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="telefono">
                                <Form.Label>Móvil*</Form.Label>
                                <Form.Control type="text" inputMode="numeric" pattern="[0-9]*" placeholder="Teléfono" value={telefono} onChange={(event) => { if (!isNaN(event.target.value)) { setTelefono(event.target.value); } }} required />
                            </Form.Group>
                        </Form.Group>
                        <Form.Group controlId="direccion">
                            <Form.Label>Dirección y número*</Form.Label>
                            <Form.Control type="text" placeholder="Dirección" value={direccion} onChange={(event) => setDireccion(event.target.value)} required minLength={5} />
                        </Form.Group>
                        <Form.Group controlId="datosAdicionales">
                            <Form.Label>Datos adicionales (piso, puerta, barrio...)</Form.Label>
                            <Form.Control type="text" placeholder="Ej. Piso 2, Puerta 4" value={datosAdicionales} onChange={(event) => setDatosAdicionales(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="observaciones">
                            <Form.Label>Escribe aquí tus observaciones para la agencia...</Form.Label>
                            <Form.Control as="textarea" rows={3} value={observaciones} onChange={(event) => setObservaciones(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-8" as={Row}>
                            <Form.Group as={Col} controlId="codigoPostal">
                                <Form.Label>Código postal*</Form.Label>
                                <Form.Control type="text" inputMode="numeric" pattern="[0-9]*" placeholder="Código postal" value={codigoPostal} onChange={(event) => { if (!isNaN(event.target.value)) { setCodigoPostal(event.target.value); } }} required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="poblacion">
                                <Form.Label>Población*</Form.Label>
                                <Form.Control type="text" placeholder="Población" value={poblacion} onChange={(event) => setPoblacion(event.target.value)} required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="provincia">
                                <Form.Label>Provincia*</Form.Label>
                                <Form.Control type="text" placeholder="Provincia" value={provincia} onChange={(event) => setProvincia(event.target.value)} required />
                            </Form.Group>
                        </Form.Group>
                        <div className='d-flex justify-content-center mt-4'>
                            <Button variant="success" type="submit" disabled={sending}>
                                {sending ? 'Enviando...' : 'Realizar pedido'}
                            </Button>
                        </div>
                        <p className='text-danger d-flex justify-content-center'>{error ? 'Ha ocurrido un error' : ''}</p>
                    </Form>
                </Col>
                <Col md={4}>
                    <ResumenCarrito
                        carrito={props.carrito}
                        vaciarCarrito={props.vaciarCarrito}
                        mostrarBotones={"none"}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default DireccionDeEntrega;
