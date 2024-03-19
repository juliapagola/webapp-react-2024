import { Button, ButtonGroup, Image } from "react-bootstrap"


function Producto() {

    const nombre = "Producto 1"
    const precio = "$100"
    const imagen = "https://via.placeholder.com/50"

    
    return (
        <div className="producto">
            <div className="detallesProducto">
                <div className="imagenProducto">
                    <Image src={imagen} thumbnail />
                </div>
                <div className="nombreProducto">
                    {nombre}
                </div>
                <div className="precioProducto">
                    {precio}
                </div>
            </div>
            <div className="botonesProducto">
                <ButtonGroup size="sm">
                    <Button variant="secondary">-</Button>
                    <Button variant="secondary">+</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default Producto