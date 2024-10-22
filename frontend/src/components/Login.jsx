import { useState } from "react";
import axios from "axios";

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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="correo">Correo:</label>
                <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="contraseña">Contraseña:</label>
                <input
                    type="password"
                    id="contraseña"
                    name="contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
}

export default Login;
