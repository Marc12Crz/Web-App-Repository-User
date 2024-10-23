import '../WelcomeStyle.css'; // Asegúrate de que esta ruta sea correcta
import Donacion from '../assets/donacion.png';
import Adopcion from '../assets/Adopcion.png';
import Albergue from '../assets/Albergues.png';
import Quienes_Somos from '../assets/Quienes_somos.png';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <h2>Hola, Usuario</h2>
        <p>Bienvenido a PawFriends</p>
        <button className="view-pets-button">Ver las mascotas</button>
      </div>
      
      <div className="grid-container">
        <div className="grid-item">
          <img src={Donacion} alt="Donaciones" className="grid-image" />
          <button className="grid-button">Donaciones</button>
        </div>
        <div className="grid-item">
          <img src={Adopcion} alt="Encuentro" className="grid-image" />
          <button className="grid-button">Encuentro</button>
        </div>
        <div className="grid-item">
          <img src={Albergue} alt="Albergues" className="grid-image" />
          <button className="grid-button">Albergues</button>
        </div>
        <div className="grid-item">
          <img src={Quienes_Somos} alt="Quiénes somos" className="grid-image" />
          <button className="grid-button">Quiénes somos</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
