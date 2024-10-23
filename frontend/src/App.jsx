import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Perfil from './components/Perfil';  // Importamos el componente Perfil

function App() {
    return (
        <Router>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/perfil" element={<Perfil />} />  {/* Ruta añadida para Perfil */}
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
