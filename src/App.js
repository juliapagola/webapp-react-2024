import './App.css';
import ListadoProductos from './Componentes/Productos/ListadoProductos';

import Header from './Componentes/Interfaz/Header';
import Footer from './Componentes/Interfaz/Footer';
import { Route, Routes } from 'react-router-dom';
import Carrito from './Componentes/Productos/Carrito';
import Contact from './Paginas/Contact';
import AboutUs from './Paginas/AboutUs';
import Error from './Paginas/Error';
import { useCallback, useEffect, useState } from 'react';

function App() {

  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const comprobarCarrito = useCallback((producto) => {
    let encontrado = false;
    carrito.forEach(elemento => {
      if (elemento.id === producto.id) {
        encontrado = true;
      }
    })
    return encontrado;
  },[carrito]);

  const añadirCarrito = useCallback((producto) => {
    if(comprobarCarrito(producto)) {
      setCarrito((prevCarrito) => {
        return prevCarrito.map((elemento) => {
          if (elemento.id === producto.id) {
            elemento.cantidad++;
          }
          return elemento;
        })
      })
    } else {
      setCarrito((prevCarrito) => {
        return [...prevCarrito, producto];
      })
    }
  },[comprobarCarrito]);

  const quitarCarrito = useCallback((producto) => {
    setCarrito((prevCarrito) => {
      return prevCarrito.map((elemento) => {
        if (elemento.id === producto.id && elemento.cantidad > 0) {
          elemento.cantidad--;
        }
        return elemento;
      });
    });
  },[]);

  const eliminarCarrito = useCallback((producto) => {
    setCarrito((prevCarrito) => {
      return prevCarrito.filter((elemento) => {
        return elemento.id !== producto.id;
      })
    })
  },[]);

  const accionCarrito = useCallback((accion, producto) => {
    if(!comprobarCarrito(producto)){
      producto.cantidad = 1;
    }
    if (accion === 'añadir') {
      añadirCarrito(producto);
    } 
    else if (accion === 'quitar') {
      quitarCarrito(producto);
    }
    else if (accion === 'eliminar') {
      eliminarCarrito(producto);
    }
  }, [comprobarCarrito, añadirCarrito, quitarCarrito, eliminarCarrito]);

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<ListadoProductos accionCarrito={accionCarrito}/>}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/carrito' element={<Carrito accionCarrito={accionCarrito} carrito={carrito}/>} />
          <Route path='/about-us' element={<AboutUs />} />
          
          <Route path='*' element={<Error />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
