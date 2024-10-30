// src/components/Register.jsx
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Importa Link para manejar la navegación
import '../css/FormStyles.css'; // Importamos los estilos compartidos
import GoogleIcon from '../assets/google.png'; // Importamos el ícono de Google

function Register() {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        contraseña: "",
        direccion: "",
        telefono: "",
        tipo_usuario: "Adoptante",
        departamento: "",
        distrito: ""
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
            await axios.post("http://localhost:8080/api/register", formData);
            alert("Registro exitoso");
        } catch {
            alert("Error en el registro");
        }
    };

    return (
        <div className="main-content">
            <div className="form-container register-form">
                <form className="form" onSubmit={handleSubmit}>
                    <h2 className="form-title register-title">Registro</h2>
                    <div className="form-group">
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Ingresa tu nombre"
                            className="register-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            placeholder="Ingresa tu correo"
                            className="register-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id="contraseña"
                            name="contraseña"
                            value={formData.contraseña}
                            onChange={handleChange}
                            placeholder="Ingresa tu contraseña"
                            className="register-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="direccion"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                            placeholder="Ingresa tu dirección"
                            className="register-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder="Ingresa tu teléfono"
                            className="register-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <select
                            id="tipo_usuario"
                            name="tipo_usuario"
                            value={formData.tipo_usuario}
                            onChange={handleChange}
                            className="register-input"
                            required
                        >
                            <option value="Adoptante">Adoptante</option>
                            <option value="Albergue">Albergue</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="departamento"
                            name="departamento"
                            value={formData.departamento}
                            onChange={handleChange}
                            placeholder="Ingresa tu departamento"
                            className="register-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="distrito"
                            name="distrito"
                            value={formData.distrito}
                            onChange={handleChange}
                            placeholder="Ingresa tu distrito"
                            className="register-input"
                            required
                        />
                    </div>
                    <button className="form-button" type="submit">Registrar</button>
                    
                    {/* Botón de Google con el ícono */}
                    <a href="/oauth2/authorization/google" style={{ textDecoration: 'none' }}>
                        <button className="form-button-google" type="button">
                            <img src={GoogleIcon} alt="Google icon" className="google-icon" />
                            Registrarse con Google
                        </button>
                    </a>

                    <div className="extra-options">
                        <p>¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
