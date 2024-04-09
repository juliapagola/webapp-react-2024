import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo from "../Imagenes/logo.png";
import carrito from "../Imagenes/carrito.png";
import OpcionesDesplegable from "./OpcionesDesplegable";
import CarritoDesplegable from "../Productos/CarritoDesplegable";
import { useState, useContext } from "react";
import AutContext from "../../Paginas/AutContext";

function Header(props) {
  const contextAut = useContext(AutContext);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <Navbar
        className="mb-4"
        bg="custom"
        expand="lg"
        style={{ backgroundColor: "#D8EAC7" }}>
        <OpcionesDesplegable />
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
        <Navbar.Brand
          className="p-2"
          onClick={() => props.setShowMenuCarrito(true)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ boxShadow: isHovered ? " 0px 0px 10px rgba(0, 0, 0, 0.5)" : "" }}
          role="button">
          <img
            src={carrito}
            width="50"
            height="50"
            className="d-inline-block align-text"
            alt="Carrito de la compra"
          />
        </Navbar.Brand>
      </Navbar>
      <CarritoDesplegable
        showMenuCarrito={props.showMenuCarrito}
        setShowMenuCarrito={props.setShowMenuCarrito}
        carrito={props.carrito}
      />
    </>
  );
}

export default Header;
