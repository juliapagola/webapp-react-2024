import { Button, Container, Modal } from "react-bootstrap";
import ProductoCarritoSimple from "./ProductoCarritoSimple";
import { useState } from "react";
import { useNavigate } from "react-router";

function ResumenCarrito(props) {
  const carrito = props.carrito;
  let total = 0;

  carrito.forEach((producto) => {
    const precio = producto.precio;
    const cantidad = producto.cantidad;
    const totalProducto = precio * cantidad;
    total = total + totalProducto;
  });

  const [show, setShow] = useState(false);
  const [titulo, setTitulo] = useState();
  const [contenido, setContenido] = useState();
  const [boton, setBoton] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const handleContenidoModal = (event) => {
    if (event.target.value === "continuar") {
      setTitulo("¿Desea confirmar el pedido?");
      setContenido("El precio total de la compra es de " + total + "€");
      setBoton(
        <Button
          variant="success"
          onClick={() => {
            navigate("/direccion-de-entrega");
          }}
        >
          Confirmar Pedido
        </Button>
      );
    }
    if (event.target.value === "cancelar") {
      setTitulo("¿Desea vaciar el carrito?");
      setContenido("Se eliminarán todos los productos del carrito");
      setBoton(
        <Button variant="danger" onClick={props.vaciarCarrito}>
          Vaciar Carrito
        </Button>
      );
    }
    handleShow();
  };

  return (
    <Container
      className="p-2"
      style={{
        border: "1px solid lightgrey",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h3>Resumen de la compra</h3>
      {carrito.map((producto) => (
        <ProductoCarritoSimple
          key={producto.id}
          producto={producto}
          accionCarrito={props.accionCarrito}
        />
      ))}
      <h4>Precio Total: {total}€</h4>

      <Button
        variant="success"
        onClick={handleContenidoModal}
        value={"continuar"}
        style={{ margin: "7px" }}
      >
        Confirmar Pedido
      </Button>
      <Button
        variant="danger"
        onClick={handleContenidoModal}
        value={"cancelar"}
        style={{ margin: "7px" }}
      >
        Vaciar Carrito
      </Button>

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

export default ResumenCarrito;
