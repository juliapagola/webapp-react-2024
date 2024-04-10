import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DireccionDeEntrega from "./DireccionDeEntrega";

function DetallePedido() {
  const location = useLocation();
  const navigate = useNavigate();
  const pedido = location.state != null ? location.state.pedido : null;
  useEffect(() => {
    if (pedido == null || pedido.length === 0) {
      navigate("/pedidos");
    }
  });
  if(pedido == null || pedido.length === 0) {
    return null;
  }
  const reestructurarCarrito = () => {
    let arrayProductos = [];
    for (let key in pedido?.carrito) {
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
      cliente={pedido?.cliente}
      detalle={true}
    />
  );
}

export default DetallePedido;
