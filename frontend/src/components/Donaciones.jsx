import '../css/Donaciones.css';
import DNImage from '../assets/DN_00.png'; // Importación directa de la imagen
import DNImage1 from '../assets/DN_01.webp';
import DNImage2 from '../assets/DN_02.webp';
import DNImage3 from '../assets/DN_03.webp';
import DNImage4 from '../assets/DN_04.jpg';

const Donaciones = () => {
  const products = [
    {
      imgSrc: {DNImage1}, // Reemplaza con las rutas reales de las imágenes
      title: 'Bolsa Ricocan 8kg para perros',
      buttonText: 'Donar',
    },
    {
      imgSrc: {DNImage2},
      title: 'Bolsa Ricocat 8kg para gatos',
      buttonText: 'Donar',
    },
    {
      imgSrc: {DNImage3},
      title: 'Cama para perros/gatos',
      buttonText: 'Donar',
    },
    {
      imgSrc: {DNImage4},
      title: 'Rascadera para gatos',
      buttonText: 'Donar',
    },
  ];

  return (
    <div className="donaciones">
      <div className="donaciones-header">
        <h2>Donaciones</h2>
        <img src={DNImage} alt="Main donation" className="donaciones-main-image" />
      </div>

      <h3 className="donaciones-subtitle">Donaciones :</h3>

      <div className="donaciones-products">
        {products.map((product, index) => (
          <div className="donaciones-product-card" key={index}>
            <img src={product.imgSrc} alt={product.title} className="donaciones-product-image" />
            <p className="product-name">{product.title}</p> {/* Añadido className para el estilo */}
            <button className="donar-button">{product.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donaciones;
