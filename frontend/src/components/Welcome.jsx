import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h1>Bienvenido a la aplicación</h1>
      <p>Por favor, selecciona una opción:</p>
      <div>
        <Link to="/login">Iniciar sesión</Link> {/* Link al login */}
      </div>
      <div>
        <Link to="/register">Registrarse</Link> {/* Link al registro */}
      </div>
    </div>
  );
};

export default Welcome;