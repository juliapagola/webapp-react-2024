
import { useState } from 'react';
import { Navbar, Offcanvas, Container, Button, Collapse } from 'react-bootstrap';

function Desplegable() {

  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleClose = () => setShowMenu(false);
  const handleShow = () => setShowMenu(true);
  const handleCategories = () => setShowCategories(!showCategories);

  const handleMouseEnter = (buttonName) => setHoveredButton(buttonName);

  const handleMouseLeave = () => setHoveredButton(null);


  return (
    <>
      <Navbar style={{ backgroundColor: "#D8EAC7" }} expand="lg">
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
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li>
              <Button variant="transparent"
                onMouseEnter={() => handleMouseEnter('Inicio')}
                onMouseLeave={handleMouseLeave}
                href="/"
                style={{ backgroundColor: hoveredButton === 'Inicio' ? 'gray' : 'initial' }}>
                Inicio
              </Button>
            </li>
            <li>
              <Button variant="transparent"
                onMouseEnter={() => handleMouseEnter('Login')}
                onMouseLeave={handleMouseLeave}
                href="/login"
                style={{ backgroundColor: hoveredButton === 'Login' ? 'gray' : 'initial' }}>
                Login
              </Button>
            </li>
            <li>
              <Button variant="transparent"
                onMouseEnter={() => handleMouseEnter('Ver carrito')}
                onMouseLeave={handleMouseLeave}
                href="/carrito"
                style={{ backgroundColor: hoveredButton === 'Ver carrito' ? 'gray' : 'initial' }}>
                Ver carrito
              </Button>
            </li>
            <li>
              <Button variant="transparent"
                onMouseEnter={() => handleMouseEnter('Categorías')}
                onMouseLeave={handleMouseLeave}
                onClick={handleCategories}
                style={{ backgroundColor: hoveredButton === 'Categorías' ? 'gray' : 'initial' }}>
                Categorías
              </Button>
            </li>
            <Collapse in={showCategories}>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Button variant="transparent"
                    onMouseEnter={() => handleMouseEnter('Ropa Mujer')}
                    onMouseLeave={handleMouseLeave}
                    style={{ backgroundColor: hoveredButton === 'Ropa Mujer' ? 'gray' : 'initial' }}>
                    Ropa Mujer
                  </Button>
                </li>
                <li>
                  <Button variant="transparent"
                    onMouseEnter={() => handleMouseEnter('Ropa Hombre')}
                    onMouseLeave={handleMouseLeave}
                    style={{ backgroundColor: hoveredButton === 'Ropa Hombre' ? 'gray' : 'initial' }}>
                    Ropa Hombre
                  </Button>
                </li>
                <li>
                  <Button variant="transparent"
                    onMouseEnter={() => handleMouseEnter('Calzado')}
                    onMouseLeave={handleMouseLeave}
                    style={{ backgroundColor: hoveredButton === 'Calzado' ? 'gray' : 'initial' }}>
                    Calzado
                  </Button>
                </li>
                <li>
                  <Button variant="transparent"
                    onMouseEnter={() => handleMouseEnter('Accesorios')}
                    onMouseLeave={handleMouseLeave}
                    style={{ backgroundColor: hoveredButton === 'Accesorios' ? 'gray' : 'initial' }}>
                    Accesorios
                  </Button>
                </li>
              </ul>
            </Collapse>
            <li>
              <Button variant="transparent"
                onMouseEnter={() => handleMouseEnter('Ver pedidos')}
                onMouseLeave={handleMouseLeave}
                href="/pedidos"
                style={{ backgroundColor: hoveredButton === 'Ver pedidos' ? 'gray' : 'initial' }}>
                Ver pedidos
              </Button>
            </li>
            <li>
              <Button variant="transparent"
                onMouseEnter={() => handleMouseEnter('Sobre nosotros')}
                onMouseLeave={handleMouseLeave}
                href="/sobre-nosotros"
                style={{ backgroundColor: hoveredButton === 'Sobre nosotros' ? 'gray' : 'initial' }}>
                Sobre nosotros
              </Button>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Desplegable;