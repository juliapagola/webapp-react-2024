import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import ResumenPedido from "./ResumenPedido";

function ListadoPedidos() {
  const [pedidosFirebase, setPedidosFirebase] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://webapp-react-2024-dsm-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json"
      )
      .then((response) => {
        let arrayProductos = [];
        let identificador = 1;
        for (let key in response.data) {
          if (response.data[key].cliente.userID === "props.userID" ) {
            arrayProductos.push({
              id: key,
              cliente: response.data[key].cliente,
              carrito: response.data[key].carrito,
              numeroPedido: identificador,
            });
            identificador= identificador+1;
          }
        }
        setPedidosFirebase(arrayProductos);
      })
      .catch((error) => {
        alert("No se ha podido acceder");
      });
  }, []);

  if (pedidosFirebase.length === 0) {
    return  <Container className="my-3" fluid="md">
    <h2>Carrito</h2>
    <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <Row className='justify-content-center'>
        <Col className='text-center'>
          <div className='mb-5'><h3>No hay pedidos para mostrar</h3></div>
          <Button size='lg' variant='success' href="/">Volver a la página principal</Button>
        </Col>
      </Row>
    </Container >
  </Container>
  }

  return (
    <Container className="p-3">
      {pedidosFirebase.map((compra) => {
        return <ResumenPedido key={compra.id} pedido={compra} />;
      })}
    </Container>
  );
}

export default ListadoPedidos;
