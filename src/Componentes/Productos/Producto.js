import { Button, Card } from "react-bootstrap"
import './Producto.css'


function Producto(props) {

    const nombre = props.producto.nombre
    const precio = props.producto.precio
    const imagen = props.producto.imagen


    const handlerCarrito = (event) => {
        if (event.target.value === 'añadir') {
            console.log('Añadir al carrito')
        } else {
            console.log('Quitar del carrito')
        }
    }

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
                        <Button variant="secondary" onClick={handlerCarrito} value="quitar">-</Button>
                        <Button variant="secondary" onClick={handlerCarrito} value="añadir">+</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Producto