import './App.css';
import ListadoProductos from './Componentes/Productos/ListadoProductos';
import DetalleProducto from './Componentes/Productos/DetalleProducto';
import Header from './Componentes/Interfaz/Header';
import Footer from './Componentes/Interfaz/Footer';
import { Route, Routes } from 'react-router-dom';
import Carrito from './Componentes/Productos/Carrito';
import Error from './Paginas/Error';
import DireccionDeEntrega from './Componentes/Pedidos/DireccionDeEntrega';
import { useEffect, useState } from 'react';
import SobreNosotros from './Paginas/SobreNosotros';
import ListadoPedidos from './Componentes/Pedidos/ListadoPedidos';
import Registrarse from './Paginas/Registrarse';
import Login from './Paginas/Login';
import DetallePedido from './Componentes/Pedidos/DetallePedido';
import AutContext from './Paginas/AutContext';

function App() {
  const [login, setLogin] = useState(false);
  const [userID, setUserID] = useState('');

  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const comprobarCarrito = (producto) => {
    let encontrado = false;
    carrito.forEach((elemento) => {
      if (elemento.id === producto.id) {
        producto.cantidad = elemento.cantidad;
        encontrado = true;
      }
    });
    return encontrado;
  };

  const añadirCarrito = (producto) => {
    if (comprobarCarrito(producto)) {
      setCarrito((prevCarrito) => {
        return prevCarrito.map((elemento) => {
          if (elemento.id === producto.id) {
            return {
              ...elemento,
              cantidad: elemento.cantidad + 1,
            };
          }
          return elemento;
        });
      });
    } else {
      setCarrito((prevCarrito) => {
        return [...prevCarrito, producto];
      });
    }
  };

  const quitarCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      return prevCarrito.map((elemento) => {
        if (elemento.id === producto.id && elemento.cantidad > 0) {
          return {
            ...elemento,
            cantidad: elemento.cantidad - 1,
          };
        }
        return elemento;
      });
    });
  };

  const eliminarCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      return prevCarrito.filter((elemento) => {
        return elemento.id !== producto.id;
      });
    });
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const accionCarrito = (accion, producto) => {
    if (!comprobarCarrito(producto)) {
      producto.cantidad = 1;
    }
    if (accion === "añadir") {
      añadirCarrito(producto);
    }
    else if (accion === 'eliminar' || producto.cantidad <= 1) {
      eliminarCarrito(producto);
    } else if (comprobarCarrito(producto) && accion === "quitar") {
      quitarCarrito(producto);
    }
  };

  const [showMenuCarrito, setShowMenuCarrito] = useState(false);

  return (
    <div className="App">
      <AutContext.Provider value={{ login, setLogin, userID, setUserID }}>
        <Header
          showMenuCarrito={showMenuCarrito}
          setShowMenuCarrito={setShowMenuCarrito}
          carrito={carrito}
        />
        <Routes>
          <Route path='/' element={<ListadoProductos accionCarrito={accionCarrito} setShowMenuCarrito={setShowMenuCarrito} comprobarCarrito={comprobarCarrito} />} />
          <Route path='/carrito' element={<Carrito accionCarrito={accionCarrito} vaciarCarrito={vaciarCarrito} carrito={carrito} />} />
          <Route path='/sobre-nosotros' element={<SobreNosotros />} />
          <Route path='/registrarse' element={<Registrarse />} />
          <Route path='/login' element={<Login />} />
          <Route path='/direccion-de-entrega' element={<DireccionDeEntrega carrito={carrito} vaciarCarrito={vaciarCarrito} detalle={false} />} />
          <Route path='/detalle-producto' element={<DetalleProducto accionCarrito={accionCarrito} setShowMenuCarrito={setShowMenuCarrito} />} />
          <Route path="/pedidos" element={<ListadoPedidos />} />
          <Route path="/detalle-pedido" element={<DetallePedido />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </AutContext.Provider>
    </div>
  );
}

export default App;
