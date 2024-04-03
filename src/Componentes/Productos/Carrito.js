import { Col, Container, Row } from "react-bootstrap";
import "./Producto.css";
import ProductoCarrito from "./ProductoCarrito";
import ResumenCarrito from "./ResumenCarrito";

function Carrito(props) {
  const carrito = props.carrito;

  if (carrito.length === 0) {
    return (
      <Container className="my-3" fluid="md">
        <Row className="justify-content-center">
          <Col md={7}>
            <h3 className="text-center">El carrito está vacío</h3>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="my-3" fluid="md">
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
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Carrito;
