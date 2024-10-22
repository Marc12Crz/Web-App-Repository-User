import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    direccion: "",
    telefono: "",
    tipo_usuario: "",
    departamento: "",
    distrito: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:8080/api/register", formData);
        // Usar la respuesta del servidor
        console.log(response.data); // Para ver los datos de la respuesta
        alert(`Usuario registrado con éxito: ${response.data}`);
    } catch (error) {
        console.error(error);
        alert("Error en el registro");
    }
};

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input type="email" name="correo" placeholder="Correo" onChange={handleChange} />
      <input type="password" name="contraseña" placeholder="Contraseña" onChange={handleChange} />
      <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} />
      <input type="text" name="telefono" placeholder="Teléfono" onChange={handleChange} />
      <select name="tipo_usuario" onChange={handleChange}>
        <option value="Adoptante">Adoptante</option>
        <option value="Albergue">Albergue</option>
      </select>
      <input type="text" name="departamento" placeholder="Departamento" onChange={handleChange} />
      <input type="text" name="distrito" placeholder="Distrito" onChange={handleChange} />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;
