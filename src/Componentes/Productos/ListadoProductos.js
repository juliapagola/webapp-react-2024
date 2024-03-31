import { useEffect, useState } from 'react';
import { Container, CardGroup } from "react-bootstrap";
import Producto from "./Producto";
import axios from 'axios';


function ListadoProductos() {

  const [productosFirebase, setProductosFirebase] = useState([]);

  useEffect(() => {
    axios.get('https://webapp-react-2024-dsm-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
      .then((response) => {
        let arrayProductos = [];
        for (let key in response.data) {
          arrayProductos.push({
            id: key,
            nombre: response.data[key].nombre,
            precio: response.data[key].precio,
            fecha: new Date(response.data[key].fecha),
            descripcion: response.data[key].descripcion,
            categoria: response.data[key].categoria,
            imagen: response.data[key].imagen
          })
        }
        setProductosFirebase(arrayProductos);
      })
      .catch((error) => {
        alert('No se ha podido acceder');
      })
  }, []);




  let contenido =
    <Container className="listadoProductos" fluid="md">
      <CardGroup className="justify-content-md-center" md={6}>
        {productosFirebase.map((elemento) => {
          return (
            <Producto key={elemento.id} producto={elemento} />
          )
        })}
      </CardGroup>
    </Container>

  return (
    <>
      {contenido}
    </>
  )
}

export default ListadoProductos;