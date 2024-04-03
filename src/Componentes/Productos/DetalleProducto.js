import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";

const DetalleProducto = (props) => {
  const location = useLocation();
  const [key, setKey] = useState("");
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const keyParam = searchParams.get("key");
    setKey(keyParam || "");
  }, [location.search]);

  useEffect(() => {
    if (key) {
      axios
        .get(
          `https://webapp-react-2024-dsm-default-rtdb.europe-west1.firebasedatabase.app/productos.json?orderBy="$key"&equalTo="${key}"`
        )
        .then((response) => {
          const productoData = response.data[key];
          if (productoData) {
            setProducto({
              id: key,
              nombre: productoData.nombre,
              precio: productoData.precio,
              fecha: productoData.fecha,
              descripcion: productoData.descripcion,
              imagen: productoData.imagen,
            });
          } else {
            console.error("Producto no encontrado");
            setProducto({});
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [key]);

  const handleClick = () => {
    props.accionCarrito("añadir", producto);
    props.setShowMenuCarrito(true);
  };

  return (
    <Container style={{ height: '100vh' }}>
      <Row>
        <Col md={6}>
          <div className="imagen-container d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              alt={producto.nombre}
              src={producto.imagen}
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="info-producto mb-4">
            <h1>DETALLES DEL PRODUCTO - {producto.id}</h1>
            <div className="nombre-producto mt-4">
              <h2>{producto.nombre}</h2>
            </div>
            <div className="precio mb-4">
              <h5>Precio:</h5> <h3>{producto.precio}€</h3>
            </div>
            <div className="fecha mb-4">
              <h5>Fecha de Incorporación:</h5> {producto.fecha}
            </div>
            <div className="descripcion">
              <h2>Descripción:</h2> {producto.descripcion}.
            </div>
          </div>
          <Button
            variant="success"
            size="lg"
            className="mt-3"
            onClick={handleClick}
          >
            Añadir al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
