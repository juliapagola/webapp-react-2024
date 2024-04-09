import { Navbar} from "react-bootstrap";
import logo from "../Imagenes/logo.png";
import login from "../Imagenes/login.png";
import logout from "../Imagenes/logout.png";
import carrito from "../Imagenes/carrito.png";
import OpcionesDesplegable from "./OpcionesDesplegable";
import CarritoDesplegable from "../Productos/CarritoDesplegable";
import { useEffect, useState } from "react";
// import { contextAut } from "../Autenticacion/contextAut";

function Header(props) {
  const [isHovered, setIsHovered] = useState(false);
  const contextAut = {
    login: true,
    userID: "userID",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [imagen, setImagen] = useState({ login });
  const [url, setUrl] = useState("/login");
  const [texto, setTexto] = useState("");

  useEffect(() => {
    if (contextAut.login) {
      setImagen(logout);
      setUrl("/logout");
      setTexto("Usuario: " + contextAut.userID);
    } else {
      setImagen(login);
      setUrl("/login");
      setTexto("");
    }
  }, [contextAut.login, contextAut.userID]);

  return (
    <>
      <Navbar
        className="mb-4 justify-content-between"
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
        <div style={{textAlign:"center"}}>
            <p>{texto}</p>
          <Navbar.Brand
            className="p-2"
            onClick={() => props.setShowMenuCarrito(true)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              boxShadow: isHovered ? " 0px 0px 10px rgba(0, 0, 0, 0.5)" : "",
            }}
            role="button">
            <img
              src={carrito}
              width="50"
              height="50"
              className="d-inline-block align-text"
              alt="Carrito de la compra"
            />
          </Navbar.Brand>
          <Navbar.Brand href={url} role="button" className="p-2">
            <img
              src={imagen}
              width="50"
              height="50"
              className="d-inline-block align-text m-2"
              alt="Iniciar sesion"
            />
          </Navbar.Brand>
        </div>
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
