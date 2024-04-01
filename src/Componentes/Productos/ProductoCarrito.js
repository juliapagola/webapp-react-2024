import { Button, Card, Row, Col} from "react-bootstrap"
import './Producto.css'

function ProductoCarrito(props) {
  const nombre = props.producto.nombre
  const precio = props.producto.precio
  const imagen = props.producto.imagen


  return (
    <Card className="my-3">
      <Row>
        <Col md={2}>
        <Card.Img
          className="imagenProducto p-2"
          variant="top"
          src={imagen}
          style={{ width: '120px', height: '120px'}}
        /></Col>
        <Col md={10}>
          <Card.Body style={{ textAlign: 'center' }}>
            <Row>
            <Col md={2}> 
              <Card.Title className="nombreProducto">{nombre}</Card.Title>
              <Card.Text className="precioProducto">
              {precio}€
            </Card.Text>
            </Col>
            <Col md={6}>
              <Card.Text className="botonesProducto">
                <Button variant="secondary" onClick={() => props.accionCarrito('quitar', props.producto)}>-</Button>
                <span style={{padding:'5px'}}>{props.producto.cantidad}</span>
                <Button variant="secondary" onClick={() => props.accionCarrito('añadir', props.producto)}>+</Button>
              </Card.Text>
            </Col>
            <Col md={2}>
              <Button variant="danger" onClick={() => props.accionCarrito('eliminar', props.producto)}>Eliminar</Button>
            </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductoCarrito;