import { Link } from 'react-router-dom';
import Logo from '../assets/PawFriends_Logo.webp';  // Importar logo
import ProfileIcon from '../assets/user.png';       // Importar icono de usuario
import Slidebar from './Slidebar';                 // Importar el slidebar

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Slidebar deslizante */}
      <Slidebar />
      
      {/* Logo centrado con enlace */}
      <div className="navbar-center">
        <Link to="/welcome">
          <img src={Logo} alt="PawFriends Logo" />
        </Link>
      </div>
      
      {/* Icono de perfil a la derecha */}
      <div className="navbar-right">
        <img src={ProfileIcon} alt="Perfil" className="profile-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
