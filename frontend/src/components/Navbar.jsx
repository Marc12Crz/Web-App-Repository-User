import { useState } from 'react'; // Importar useState
import { Link } from 'react-router-dom';
import Logo from '../assets/PawFriends_Logo.webp';  // Importar logo
import ProfileIcon from '../assets/user.png';       // Importar icono de usuario
import Slidebar from './Slidebar';                 // Importar el slidebar
import UserMenu from './UserMenu';                 // Importar el UserMenu

const Navbar = () => {
  // Estado para controlar si el menú de usuario está abierto
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Función para alternar el menú de usuario
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen); // Alterna el estado entre true y false
  };

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

      {/* Icono de perfil a la derecha con toggle */}
      <div className="navbar-right">
        <img
          src={ProfileIcon}
          alt="Perfil"
          className="profile-icon"
          onClick={toggleUserMenu} // Aquí alterna el menú al hacer clic
        />
      </div>

      {/* Menú de usuario desplegable */}
      {isUserMenuOpen && <UserMenu isOpen={isUserMenuOpen} toggleMenu={toggleUserMenu} />}
    </nav>
  );
};

export default Navbar;
