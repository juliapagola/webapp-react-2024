import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Producto.css";

function Producto(props) {
  const key = props.producto.id;
  const nombre = props.producto.nombre;
  const precio = props.producto.precio;
  const imagen = props.producto.imagen;

  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (event) => {
    props.accionCarrito(event.target.value, props.producto);
    props.setShowMenuCarrito(true);
  };

  return (
    <div className="producto">
      <Card
        size="sm"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: "200px", borderColor: isHovered ? "#87b55b" : "" }}
        className="m-2"
        onClick={() => {
          navigate(`detalle-producto?key=${key}`);
        }}
        role="button"
      >
        <div className="card-content">
          <Card.Img className="imagenProducto p-2" variant="top" src={imagen} />
        </div>
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title
            className="nombreProducto"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {nombre}
          </Card.Title>
          <Card.Text className="precioProducto">{precio}€</Card.Text>
          <div className="botonesProducto">
            <Button variant="secondary" onClick={handleClick} value="quitar">
              -
            </Button>
            <Button variant="secondary" onClick={handleClick} value="añadir">
              +
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Producto;
