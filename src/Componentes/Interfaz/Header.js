import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../Imagenes/logo.png';
import carrito from '../Imagenes/carrito.png';
import Desplegable from './Desplegable';

function Header() {
    return (
        <>
            <Navbar bg="custom" expand="lg" style={{ backgroundColor: '#D8EAC7' }}>
                <Desplegable />
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="100"
                        height="100"
                        className="d-inline-block align-text"
                        alt="Logo de la Tienda"
                    />
                    Scader
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="d-flex mx-auto">
                        <FormControl
                            type="search"
                            placeholder="Buscar"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
                <Navbar.Brand href="carrito">
                    <img
                        src={carrito}
                        width="50"
                        height="50"
                        className="d-inline-block align-text"
                        alt="Carrito de la compra"
                    />
                </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default Header;
