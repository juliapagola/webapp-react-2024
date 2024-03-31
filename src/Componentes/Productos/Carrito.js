import { CardGroup, Container } from "react-bootstrap";
import ProductoCarrito from "./ProductoCarrito";
import './Producto.css'

function Carrito() {

  const productos = [
    {
      nombre: '111111',
      precio: 45.5,
      imagen: 'https://via.placeholder.com/50',
    }
  ]

  return (
    <Container className="listadoProductos" fluid="md">
      <CardGroup className="justify-content-md-center" md={6}>                
        <ProductoCarrito producto = {productos[0]}/>
        </CardGroup>
    </Container>
  );
}

export default Carrito;