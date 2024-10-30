import '../css/QuienesSomos.css';
import PF_01 from '../assets/PF_01.png';
import PF_02 from '../assets/PF_02.png';
import PF_03 from '../assets/PF_03.png';

const QuienesSomos = () => {
  return (
    <div className="quienes-somos-container">
      {/* Sección: ¿Qué es PawFriends? */}
      <div className="section-card">
        <h2 className="section-title">¿Qué es PawFriends?</h2>
        <div className="section-content">
          <img
            src={PF_01}
            alt="Descripción de PawFriends"
            className="section-image"
          />
          <p className="section-description">
            Pawfriends es un macroalbergue virtual dedicado a facilitar la adopción responsable de mascotas, principalmente perros y gatos. Su misión es conectar a los albergues de animales con personas interesadas en adoptar, brindando una plataforma accesible y fácil de usar.
          </p>
        </div>
      </div>

      {/* Sección: Nuestros Albergues */}
      <div className="section-card">
        <h2 className="section-title">Nuestros Albergues</h2>
        <div className="section-content">
          <p className="section-description">
            Como aplicación de mascotas, contamos con diversas asociaciones y albergues para ayudar a las mascotas a encontrar un hogar.
          </p>
          <img
            src={PF_02}
            alt="Nuestros Albergues"
            className="section-image"
          />
        </div>
        <button className="cta-button">Ver Más</button>
      </div>

      {/* Sección: Llamado a la acción */}
      <div className="section-card">
        <p className="section-description">
          ¿Qué esperas? Empieza a navegar con nosotros y adopta a tu próximo CanHijo o AmiGato.
        </p>
        <img
          src={PF_03}
          alt="Adopta a tu próxima mascota"
          className="section-image"
        />
        <button className="cta-button">Ver Mascotas</button>
      </div>
    </div>
  );
};

export default QuienesSomos;
