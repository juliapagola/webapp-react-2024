import { useEffect, useState } from 'react';
import { Container, CardGroup, Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import Producto from "./Producto";
import FiltradoProductos from './FiltradoProductos';
import OrdenarProductos from './OrdenarProductos';
import axios from 'axios';

function ListadoProductos() {
  const [productosFirebase, setProductosFirebase] = useState([]);

  const [categoria, setCategoria] = useState('');
  const [orden, setOrden] = useState('');

  const location = useLocation();

  const updateCategoria = (categoria) => setCategoria(categoria);
  const updateOrden = (orden) => setOrden(orden);


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoriaParam = searchParams.get('categoria');
    setCategoria(categoriaParam || '');
  }, [location.search]);

  useEffect(() => {
    axios.get('https://webapp-react-2024-dsm-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
      .then((response) => {
        let arrayProductos = [];
        for (let key in response.data) {
          const fechaFirebase = response.data[key].fecha;
          const [dia, mes, anio] = fechaFirebase.split('/');
          const fechaJavaScript = new Date(`${mes}/${dia}/${anio}`);
          arrayProductos.push({
            id: key,
            nombre: response.data[key].nombre,
            precio: response.data[key].precio,
            fecha: fechaJavaScript,
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

  let productosFiltrados = productosFirebase.filter((elemento) => {
    if (categoria !== '') {
      return elemento.categoria === categoria;
    }
    return true;
  })

  let productosOrdenados = [...productosFiltrados];
  if (orden === 'precioAlto') {
    productosOrdenados.sort((a, b) => b.precio - a.precio);
  } else if (orden === 'precioBajo') {
    productosOrdenados.sort((a, b) => a.precio - b.precio);
  } else if (orden === 'novedades') {
    productosOrdenados.sort((a, b) => b.fecha - a.fecha);
  }


  let contenido =
    <Container className="listadoProductos" fluid="md">
      <CardGroup className="justify-content-md-center" md={6}>
        {productosOrdenados.map((elemento) => {
          return (
            <Producto key={elemento.id} producto={elemento} />
          )
        })}
      </CardGroup>
    </Container>

  return (
    <>
      <Container>
        <Row>
          <Col md={1}>
          </Col>
          <Col md={2}>
            <FiltradoProductos updateCategoria={updateCategoria} categoria={categoria} />
          </Col>
          <Col md={4}>
          </Col>
          <Col md={4}>
            <OrdenarProductos updateOrden={updateOrden} orden={orden} />
          </Col>
        </Row>
      </Container>
      {contenido}
    </>
  )
}

export default ListadoProductos;