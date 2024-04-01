import { useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';

const OrdenarProductos = (props) => {
    const [activeButton, setActiveButton] = useState(null);

    const handlerClick = (orden) => {
        if (activeButton === orden) {
            setActiveButton(null);
            props.updateOrden(null);
        } else {
            setActiveButton(orden);
            props.updateOrden(orden);
        }
    };

    return (
        <>
            <Form.Label>Ordenar por:</Form.Label>
            <ButtonGroup>
                <Button
                    variant={activeButton === 'precioAlto' ? 'success' : 'outline-success'}
                    onClick={() => handlerClick('precioAlto')}>
                    Precio más alto
                </Button>
                <Button
                    variant={activeButton === 'precioBajo' ? 'success' : 'outline-success'}
                    onClick={() => handlerClick('precioBajo')}>
                    Precio más bajo
                </Button>
                <Button
                    variant={activeButton === 'novedades' ? 'success' : 'outline-success'}
                    onClick={() => handlerClick('novedades')}>
                    Novedades
                </Button>
            </ButtonGroup>
        </>
    );
};

export default OrdenarProductos;
