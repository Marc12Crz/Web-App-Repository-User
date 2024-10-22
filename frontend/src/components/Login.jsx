// src/components/Login.jsx
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Importa Link para manejar la navegación
import '../FormStyles.css'; // Importamos los estilos compartidos
import GoogleIcon from '../assets/google.png'; // Importamos el ícono de Google

function Login() {
    const [formData, setFormData] = useState({
        correo: "",
        contraseña: ""
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
            await axios.post("http://localhost:8080/api/login", formData);
            alert("Login exitoso");
        } catch {
            alert("Error en el login");
        }
    };

    return (
        <div className="main-content">
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <h2 className="form-title">Login</h2>
                    <div className="form-group">
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            placeholder="Correo"
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
                            placeholder="Contraseña"
                            required
                        />
                    </div>
                    <button className="form-button" type="submit">Iniciar Sesión</button>

                    {/* Botón de Google con el ícono */}
                    <a href="/oauth2/authorization/google" style={{ textDecoration: 'none' }}>
                        <button className="form-button-google" type="button">
                            <img src={GoogleIcon} alt="Google icon" className="google-icon" />
                            Iniciar Sesión con Google
                        </button>
                    </a>

                    <div className="extra-options">
                        <p>No tienes cuenta? <Link to="/register">Regístrate</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
