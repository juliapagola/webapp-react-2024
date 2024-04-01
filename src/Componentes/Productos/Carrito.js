import {Container } from "react-bootstrap";
import './Producto.css'
import ProductoCarrito from "./ProductoCarrito";

function Carrito(props) {

  return (
    <Container className="justify-content-md-center mt-3" fluid="md" style={{border: '1px solid lightgrey', borderRadius: '8px'}}>              
      {props.carrito.map(producto => (
        <ProductoCarrito key={producto.id} producto={producto} accionCarrito={props.accionCarrito}/>
      ))}
    </Container>
  );
}

export default Carrito;