import PropTypes from 'prop-types'; // Importar PropTypes para validar props
import { Link } from 'react-router-dom';  // Importar Link para la navegación interna
import '../css/UserMenuStyles.css'; // Importar los estilos del UserMenu

const UserMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`user-menu ${isOpen ? 'open' : ''}`}>
      <h2>Menú de Usuario</h2>
      <ul>
        <li><Link to="/perfil" onClick={toggleMenu}>Perfil</Link></li>  {/* Usar Link para navegación interna */}
        <li><Link to="/ajustes" onClick={toggleMenu}>Ajustes</Link></li>
        <li><Link to="/cerrar-sesion" onClick={toggleMenu}>Cerrar Sesión</Link></li>
      </ul>
    </div>
  );
};

// Definir los tipos de las props
UserMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,      // isOpen debe ser booleano y requerido
  toggleMenu: PropTypes.func.isRequired,  // toggleMenu debe ser una función y requerido
};

export default UserMenu;
