import './App.css';
import ListadoProductos from './Componentes/Productos/ListadoProductos';
import Header from './Componentes/Interfaz/Header';
import Footer from './Componentes/Interfaz/Footer';
import { Route, Routes } from 'react-router-dom';
import Carrito from './Componentes/Productos/Carrito';
import Contact from './Paginas/Contact';
import AboutUs from './Paginas/AboutUs';
import Error from './Paginas/Error';

const footer = 'Adiós Mundo';

function App() {
  return (
    <div className="App">
      <Header header />
      <Routes>
            <Route path = '/' element={<ListadoProductos />} />
            <Route path = '/contact' element={<Contact />} />
            <Route path= '/carrito' element={<Carrito/>} />
            <Route path = '/about-us' element={<AboutUs />} />
            
            <Route path = '*' element={<Error />} />
          </Routes>
      <Footer footer={footer} />
    </div>
  );
}

export default App;
