import { useSearchParams } from "react-router-dom";

const Contact = () => {

    const [paramsContacto, setParamsContacto] = useSearchParams();

    return (
        <>
            <h1>Info de contacto sede de {paramsContacto.get('sede')}</h1>
            <p>Nuestra dirección es tal y la persona es tal.</p>
        </>
    )
}

export default Contact;