// src/components/Footer.jsx
import '../css/HeaderFooterStyles.css'; // Importamos los estilos

const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <li><a href="/contacto">Contacto</a></li>
                <li><a href="/terminos">Términos de Uso</a></li>
                <li><a href="/privacidad">Política de Privacidad</a></li>
            </ul>
        </footer>
    );
}

export default Footer;
