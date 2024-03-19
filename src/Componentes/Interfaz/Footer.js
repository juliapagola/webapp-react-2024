import "./Footer.css";

function Footer(props) {
    return (
        <div className="footer">
            <p>{props.footer}</p>
        </div>
    );
}

export default Footer;
