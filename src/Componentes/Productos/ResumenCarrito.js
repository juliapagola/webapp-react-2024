import { Button, Container } from "react-bootstrap";
import ProductoCarritoSimple from "./ProductoCarritoSimple";

function ResumenCarrito(props) {
  const carrito = props.carrito;
  let total = 0;

  carrito.forEach((element) => {
    const precio = element.precio;
    const cantidad = element.cantidad;
    const totalProducto = precio * cantidad;
    total = total + totalProducto;
  });

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
      {props.carrito.map((producto) => (
        <ProductoCarritoSimple
          key={producto.id}
          producto={producto}
          accionCarrito={props.accionCarrito}
        />
      ))}
      <h4>Precio Total: {total}€</h4>

      <Button variant="success" style={{margin:"7px"}}>Confirmar Pedido</Button>
      <Button variant="danger" style={{margin:"7px"}}>Vaciar Carrito</Button>
    </Container>
  );
}

export default ResumenCarrito;
