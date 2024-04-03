import { Col, Container, Row, Button } from "react-bootstrap";
import "./Producto.css";
import ProductoCarrito from "./ProductoCarrito";
import ResumenCarrito from "./ResumenCarrito";

function Carrito(props) {
  const carrito = props.carrito;

  if (carrito.length === 0) {
    return (
      <Container className="my-3" fluid="md">
        <h2>Carrito</h2>
        <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
          <Row className='justify-content-center'>
            <Col className='text-center'>
              <div className='mb-5'><h3>El carrito está vacío</h3></div>
              <Button size='lg' variant='success' href="/">Volver a la página principal</Button>
            </Col>
          </Row>
        </Container >
      </Container>
    );
  }

  return (
    <Container className="my-3" fluid="md" style={{ height: '100vh' }}>
      <h2>Carrito</h2>
      <Row className="justify-content-between">
        <Col
          md={7}
          className="px-3 m-1"
          style={{ border: "1px solid lightgrey", borderRadius: "8px" }}
        >
          {carrito.map((producto) => (
            <ProductoCarrito
              key={producto.id}
              producto={producto}
              accionCarrito={props.accionCarrito}
            />
          ))}
        </Col>
        <Col
          md={4}
        >
          <ResumenCarrito
            carrito={props.carrito}
            vaciarCarrito={props.vaciarCarrito}
            mostrarBotones={"block"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Carrito;
