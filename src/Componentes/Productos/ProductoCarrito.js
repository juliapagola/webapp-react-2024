import { Card, Row, Col} from "react-bootstrap"
import './Producto.css'

function ProductoCarrito(props) {
  const nombre = props.producto.nombre
  const precio = props.producto.precio
  const imagen = props.producto.imagen

  return (
    <Card>
      <Row>
        <Col md={4}>
          <Card.Img className="imagenProducto p-2" style={{height:'20px'}} variant="top" src={imagen}  />
        </Col>
        <Col md={8}>
          <Card.Body>
          <Card.Title className="nombreProducto">{nombre}</Card.Title>
          <Card.Text className="precioProducto">
              {precio}€
          </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductoCarrito;