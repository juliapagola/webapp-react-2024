import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import DireccionDeEntrega from "./DireccionDeEntrega";
import AutContext from "../../Paginas/AutContext";

function DetallePedido() {
  const contextAut = useContext(AutContext);
  const location = useLocation();
  const pedido = location.state.pedido || null;
  const navigate = useNavigate();
  useEffect(() => {
    if (pedido == null || pedido.length === 0) {
      navigate("/pedidos");
    }
  });

  const reestructurarCarrito = () => {
    let arrayProductos = [];
    for (let key in pedido.carrito) {
      arrayProductos.push({
        id: key,
        nombre: pedido.carrito[key].nombre,
        cantidad: pedido.carrito[key].cantidad,
        precio: pedido.carrito[key].precio,
      });
    }
    return arrayProductos;
  };

  const carrito = reestructurarCarrito();
  return (
    <DireccionDeEntrega
      carrito={carrito}
      cliente={pedido.cliente}
      detalle={true}
    />
  );
}

export default DetallePedido;
