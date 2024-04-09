import { Button, Container, Row, Col } from "react-bootstrap";

function ResumenPedido(props) {
  
  let total = 0;
  let numeroProductos = 0;

  for (let key in props.pedido.carrito) {
    total += props.pedido.carrito[key].cantidad * props.pedido.carrito[key].precio;
    numeroProductos += props.pedido.carrito[key].cantidad;
  };

  return (
    <Container
      className="p-2 my-2"
      style={{
        border: "1px solid lightgrey",
        borderRadius: "8px",
        textAlign: "center",
      }}>
        <h2>Pedido numero {props.pedido.id}</h2>

      <Row className="justify-content-between m-3">
        <Col md={4}>
        <h4>Productos comprados: {numeroProductos}</h4>
        </Col>
        <Col md={4}>
        <h4>Total: {total}€</h4>
        </Col>
        <Col md={2}>
          <Button variant="success">
            Ver detalles
          </Button>
          </Col>
          <Col md={2}>
          <Button variant="danger">
            Eliminar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumenPedido;
