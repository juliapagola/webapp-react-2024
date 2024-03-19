import { Container, CardGroup } from "react-bootstrap";
import Producto from "./Producto";


function ListadoProductos(){
    const productos = [
        {
          nombre: '111111',
          precio: 45.5,
          imagen: 'https://via.placeholder.com/50',
        },
        {
          nombre: '22222',
          precio: 45.5,
          imagen: 'https://via.placeholder.com/50',
        },
        {
          nombre: '333333',
          precio: 45.5,
          imagen: 'https://via.placeholder.com/50',
        }];
    return(
        <Container className="listadoProductos" fluid="md">
            <CardGroup className="justify-content-md-center" md={6}>                
                <Producto producto = {productos[0]}/>
                <Producto producto = {productos[1]}/>
                <Producto producto = {productos[2]}/>
                <Producto producto = {productos[0]}/>
                <Producto producto = {productos[1]}/>
                <Producto producto = {productos[2]}/>
                <Producto producto = {productos[0]}/>
                <Producto producto = {productos[1]}/>
                <Producto producto = {productos[2]}/>
            </CardGroup>
        </Container>
    )
}

export default ListadoProductos;