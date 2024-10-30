import { useState } from 'react';
import '../css/Slidebar.css'; // Importar el archivo CSS con los estilos

const Slidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controla si el slidebar está abierto

  const toggleSlidebar = () => {
    setIsOpen(!isOpen); // Cambia el estado del slidebar
  };

  return (
    <div className={`de-todo ${isOpen ? 'open' : ''}`}>
      <input
        className="input_unico"
        type="checkbox"
        checked={isOpen}
        onChange={toggleSlidebar}
      />
      <div className={`toggle_unico ${isOpen ? 'hide' : ''}`} onClick={toggleSlidebar}>
        <span className="topo_unico comun_unico"></span>
        <span className="medio_unico comun_unico"></span>
        <span className="bajo_unico comun_unico"></span>
      </div>
      <div className={`slide_unico ${isOpen ? 'open' : ''}`}>
        <h1 className="titulo_unico">Menu Principal</h1>
        <ul className="ul_unico">
          <li className="li_unico"><a className="a_unico" href="/Welcome"><i className="icono_unico fa-solid fa-house"></i>Inicio</a></li>
          <li className="li_unico"><a className="a_unico" href="/Encuentro"><i className="icono_unico fa-sharp fa-solid  fa-paw-simple"></i>Encuentro</a></li>
          <li className="li_unico"><a className="a_unico" href="/Mascota"><i className="icono_unico fa-sharp fa-solid  fa-paw-simple"></i>Mascotas</a></li>
          <li className="li_unico"><a className="a_unico" href="/Donaciones"><i className="icono_unico fa-solid fa-box-heart"></i>Donaciones</a></li>
          <li className="li_unico"><a className="a_unico" href="/Albergues"><i className="icono_unico fa-duotone fa-solid fa-house-heart"></i>Albergues</a></li>
          <li className="li_unico"><a className="a_unico" href="/TerminosLegales"><i className="icono_unico fa-sharp fa-solid fa-books"></i>Quienes Somos</a></li>
          <li className="li_unico"><a className="a_unico" href="/TerminosLegales"><i className="icono_unico fa-sharp fa-solid fa-books"></i>Terminos Legales</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Slidebar;
