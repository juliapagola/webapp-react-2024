import { Button, Offcanvas } from "react-bootstrap";
import ProductoCarritoSimple from "./ProductoCarritoSimple";
import { useNavigate } from "react-router";

function CarritoDesplegable(props) {
  const carrito = props.carrito;
  let total = 0;

  carrito.forEach((producto) => {
    const precio = producto.precio;
    const cantidad = producto.cantidad;
    const totalProducto = parseFloat((cantidad * precio).toFixed(2));
    total = parseFloat((total + totalProducto).toFixed(2));
  });

  const handleClose = () => props.setShowMenuCarrito(false);
  const navigate = useNavigate();
  const handleClick = () => {
    props.setShowMenuCarrito(false);
    navigate("carrito");
  }

  if (carrito.length === 0) {
    return (
      <Offcanvas
        show={props.showMenuCarrito}
        placement="end"
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Resumen del carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5 className="m-3">El carrito está vacío</h5>
          <Button variant='success' href="/">Volver a la página principal</Button>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }

  return (
    <Offcanvas
      show={props.showMenuCarrito}
      placement="end"
      onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Resumen del carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {carrito.map((producto) => (
          <ProductoCarritoSimple
            key={producto.id}
            producto={producto}
            accionCarrito={props.accionCarrito}
          />
        ))}
        <h5 className="m-3">Precio Total: {total}€</h5>
        <Button className="m-3" variant="success" onClick={handleClick}>
          Ir al carrito
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CarritoDesplegable;
