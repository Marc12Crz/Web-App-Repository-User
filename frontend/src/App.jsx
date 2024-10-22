import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> {/* Página de inicio (Login) */}
                <Route path="/login" element={<Login />} /> {/* Ruta para login */}
                <Route path="/register" element={<Register />} /> {/* Ruta para registro */}
                <Route path="/welcome" element={<Welcome />} /> {/* Ruta para welcome */}
            </Routes>
        </Router>
    );
}

export default App;
