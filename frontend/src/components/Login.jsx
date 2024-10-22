import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Importa Link para manejar la navegación
import '../FormStyles.css'; // Importamos los estilos compartidos

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
                <div className="extra-options">
                    <p>No tienes cuenta? <Link to="/register">Regístrate</Link></p> {/* Navega a la ruta /register */}
                </div>
            </form>
        </div>
    );
}

export default Login;
