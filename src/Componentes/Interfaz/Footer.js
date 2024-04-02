import { Navbar } from 'react-bootstrap';
import logo from '../Imagenes/logo.png';

function Footer() {
    return (
        <Navbar className='mt-4' bg="custom" expand="lg" style={{ backgroundColor: '#D8EAC7' }}>
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-text"
                    alt="Logo de la Tienda"
                    style={{ marginLeft: '10px' }}
                />
                Scader
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Text className="mx-auto">
                    Derechos de autor © 2024
                </Navbar.Text>
                <Navbar.Text className="mx-auto">
                    <a href='/sobre-nosotros' style={{ textDecoration: 'none' }}>Sobre nosotros</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Footer;
