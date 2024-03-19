import './App.css';
import ListadoProductos from './Componentes/Productos/ListadoProductos';
import Header from './Componentes/Interfaz/Header';
import Footer from './Componentes/Interfaz/Footer';
import { Button } from 'react-bootstrap';

const footer = 'Adiós Mundo';

function App() {
  return (
    <div className="App">
      <Header header />
      <ListadoProductos />
      <Footer footer={footer} />
    </div>
  );
}

export default App;
