import { Col, Container, Row } from "react-bootstrap";

function ProductoCarritoSimple(props) {
  const nombre = props.producto.nombre;
  const cantidad = props.producto.cantidad;
  const precio = cantidad * props.producto.precio;

  return (
    <Container className="p-3" style={{ textAlign: "left" }}>
      <Row className="justify-content-between">
        <Col md={6}>{nombre}</Col>
        <Col md={2}>x{cantidad}</Col>
        <Col md={3} style={{ textAlign: "center" }}>{precio}€</Col>
      </Row>
    </Container>
  );
}

export default ProductoCarritoSimple;
