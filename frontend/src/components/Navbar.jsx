// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../HeaderFooterStyles.css'; // Importamos los estilos
import Logo from '../assets/PawFriends_Logo.webp'; // Importamos el logo
import ProfileIcon from '../assets/user.png'; // Importamos el ícono de perfil

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Navegación izquierda */}
            <div className="navbar-left">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/adopciones">Adopciones</Link></li>
                    <li><Link to="/donaciones">Donaciones</Link></li>
                    <li><Link to="/albergues">Albergues</Link></li>
                </ul>
            </div>

            {/* Logo en el centro */}
            <div className="navbar-center">
                <img src={Logo} alt="PawFriends Logo" className="navbar-logo" />
            </div>

            {/* Ícono de perfil a la derecha */}
            <div className="navbar-right">
                <img src={ProfileIcon} alt="Perfil" className="profile-icon" />
            </div>
        </nav>
    );
}

export default Navbar;
