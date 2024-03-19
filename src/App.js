import './App.css';
import Header from './Componentes/Interfaz/Header';
import Footer from './Componentes/Interfaz/Footer';
import { Button } from 'react-bootstrap';

const footer = 'Adiós Mundo';

function App() {
  return (
    <div className="App">
      <Header header />
      <Button className='primary'>Hola</Button>
      <Footer footer={footer} />
    </div>
  );
}

export default App;
