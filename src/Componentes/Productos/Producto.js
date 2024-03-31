import { Button, Card } from "react-bootstrap"
import './Producto.css'


function Producto(props) {

    const nombre = props.producto.nombre
    const precio = props.producto.precio
    const imagen = props.producto.imagen

    return (
        <div className="producto">
            <Card size="sm" style={{ width: '200px' }} className="m-2">
                <div className="card-content">
                    <Card.Img
                        className="imagenProducto p-2"
                        variant="top"
                        src={imagen}
                    />
                </div>
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title className="nombreProducto" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{nombre}</Card.Title>
                    <Card.Text className="precioProducto">
                        {precio}€
                    </Card.Text>
                    <div className="botonesProducto">
                        <Button variant="secondary">-</Button>
                        <Button variant="secondary">+</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Producto