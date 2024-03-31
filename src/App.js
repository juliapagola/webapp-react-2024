import './App.css';
import ListadoProductos from './Componentes/Productos/ListadoProductos';
import Header from './Componentes/Interfaz/Header';
import Footer from './Componentes/Interfaz/Footer';
//import { Route, Routes } from 'react-router';
import Carrito from './Componentes/Productos/Carrito';

const footer = 'Adiós Mundo';

function App() {
  return (
    <div className="App">
      <Header header />
      <ListadoProductos />
      <Carrito />
      <Footer footer={footer} />
    </div>
  );
}

export default App;
