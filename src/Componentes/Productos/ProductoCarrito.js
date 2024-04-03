import { Button, Card, Row, Col } from "react-bootstrap";
import "./Producto.css";
import { useState } from "react";
import basura from "../Imagenes/basura.png";

function ProductoCarrito(props) {
  const nombre = props.producto.nombre;
  const precio = props.producto.precio;
  const imagen = props.producto.imagen;
  const cantidad = props.producto.cantidad;
  const precioTotal = precio * cantidad;
  const [oculto, setOculto] = useState((cantidad === 1) ? "none" : "block");
  const [inactivo, setInactivo] = useState((cantidad === 1));

  const precioUnidad = (
    <Card.Text
      className="precioProducto"
      style={{ color: "gray", display: oculto }}
    >
      Precio por unidad {precio}€
    </Card.Text>
  );

  const carritoHandler = (event) => {
    if (event.target.value === "añadir") {
      setInactivo(false);
      setOculto("block");
    } else if (cantidad === 2) {
      setInactivo(true);
      setOculto("none");
    }
    props.accionCarrito(event.target.value, props.producto);
  };

  return (
    <Card className="my-3">
      <Row>
        <Col md={3}>
          <Card.Img
            className="imagenProducto p-2"
            variant="top"
            src={imagen}
            style={{ width: "150px", height: "150px" }}
          />
        </Col>
        <Col md={9}>
          <Card.Body
            className="justify-content-center align-items-center"
            style={{ textAlign: "center" }}
          >
            <Row>
              <Col md={5}>
                <Card.Title className="nombreProducto">{nombre}</Card.Title>
                <Card.Text className="precioProducto">{precioTotal}€</Card.Text>
                {precioUnidad}
              </Col>
              <Col md={7}>
                <Card.Text className="botonesProducto">
                  <Button
                    variant="secondary"
                    disabled={inactivo}
                    onClick={carritoHandler}
                    value={"quitar"}
                  >
                    -
                  </Button>
                  <span style={{ padding: "5px" }}>
                    {props.producto.cantidad}
                  </span>
                  <Button
                    variant="secondary"
                    onClick={carritoHandler}
                    value={"añadir"}
                  >
                    +
                  </Button>
                  <Button
                    variant="transparent"
                    onClick={() =>
                      props.accionCarrito("eliminar", props.producto)
                    }
                  >
                    <img
                      src={basura}
                      width="25px"
                      height="25px"
                      style={{ opacity: "0.7" }}
                      className="d-inline-block align-text"
                      alt="Carrito de la compra"
                    />
                  </Button>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductoCarrito;
