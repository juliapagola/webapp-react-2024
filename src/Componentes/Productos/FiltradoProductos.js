import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FiltradoProductos = (props) => {

    const navigate = useNavigate();

    const handlerCategoria = (event) => {
        props.updateCategoria(event.target.value);
        if (event.target.value === '') {
            navigate('/');
        } else {
            navigate(`/?categoria=${event.target.value}`);
        }
    }

    return (
        <>
            <Form.Label>Filtrar por:</Form.Label>
            <Form.Select value={props.categoria} onChange={handlerCategoria} aria-label="Default select example">
                <option value=''>Todos</option>
                <option value="modaMujer">Moda Mujer</option>
                <option value="modaHombre">Moda Hombre</option>
                <option value="calzado">Calzado</option>
                <option value="accesorios">Accesorios</option>
            </Form.Select>
        </>
    )
}

export default FiltradoProductos;