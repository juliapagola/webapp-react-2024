
import { useState } from 'react';
import { Navbar, Offcanvas, Container, Button} from 'react-bootstrap';

function Despegable() {

  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);

  return (
    <>
      <Navbar style={{backgroundColor:"#D8EAC7"}} expand="lg">
        <Container>
          <Button variant="outline-dark" onClick={handleShow}>
            <span className="navbar-toggler-icon"></span>
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={showMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Ver pedidos</a></li>
            <li><a href="#">Ver carrito</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Despegable;