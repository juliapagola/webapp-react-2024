import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResumenPedido(props) {
  console.log(props.pedido);

  let total = 0;
  let numeroProductos = 0;

  for (let key in props.pedido.carrito) {
    if (props.pedido.carrito[key] !== null) {
      total +=
        props.pedido.carrito[key].cantidad * props.pedido.carrito[key].precio;
      total = parseFloat(total.toFixed(2));
      numeroProductos += props.pedido.carrito[key].cantidad;
    }
  }
  const [show, setShow] = useState(false);
  const [titulo, setTitulo] = useState();
  const [contenido, setContenido] = useState();
  const [boton, setBoton] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleMostrarModal = () => {
    setTitulo("¿Desea eliminar el pedido?");
    setContenido("Se eliminará el pedido seleccionado definitivamente");
    setBoton(
      <Button variant="danger" onClick={handleEliminar}>
        Eliminar Pedido
      </Button>
    );
    handleShow();
  };

  const handleEliminar = () => {
    axios
      .delete(
        "https://webapp-react-2024-dsm-default-rtdb.europe-west1.firebasedatabase.app/pedidos/" +
          props.pedido.id +
          ".json"
      )
      .catch((error) => {
        alert("No se ha podido eliminar el pedido. " + error);
      });
    handleClose();
    window.location.reload();
  };

  const navigate = useNavigate();
  const handleDetalles = () => {
    navigate("/detalle-pedido", { state: { pedido: props.pedido } });
  };

  return (
    <Container
      className="p-2 my-2"
      style={{
        border: "1px solid lightgrey",
        borderRadius: "8px",
        textAlign: "center",
      }}>
      <h2>Pedido número {props.pedido.numeroPedido}</h2>

      <Row className="justify-content-between m-3">
        <Col md={4}>
          <h4>Productos comprados: {numeroProductos}</h4>
        </Col>
        <Col md={4}>
          <h4>Total: {total}€</h4>
        </Col>
        <Col md={2}>
          <Button variant="success" onClick={handleDetalles}>
            Ver detalles
          </Button>
        </Col>
        <Col md={2}>
          <Button variant="danger" onClick={handleMostrarModal}>
            Eliminar
          </Button>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{contenido}</Modal.Body>
        <Modal.Footer>{boton}</Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ResumenPedido;
