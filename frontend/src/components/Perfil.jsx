import '../css/PerfilStyles.css'; // Importa los estilos de CSS
import profileIcon from '../assets/user.png'; // Asegúrate de que el icono esté en la ruta correcta

const Perfil = () => {
  return (
    <div className="perfil-container">
      <div className="perfil-content">
        <img src={profileIcon} alt="Icono de Perfil" className="perfil-icon" />
        <h2>Adrian, 30 años</h2>
        <p><strong>Nombre: </strong> Adrian Jonathan</p>
        <p><strong>Apellido: </strong> Ochoa Perez</p>
        <p><strong>Sexo: </strong> Masculino</p>
        <p><strong>Edad: </strong> 30</p>
        <p><strong>DNI:</strong> 70342615</p>
        <p><strong>Albergue: </strong> PawFriends</p>
        <p><strong>Direccion:</strong> Av Cascanueces 54 lt31 mzh29</p>
        <button className="save-button">Guardar</button>
      </div>
    </div>
  );
};

export default Perfil;
