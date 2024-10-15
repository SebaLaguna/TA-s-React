import React, { useState } from "react";
/********************* ENRUTAMIENTO  **********************/
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import TA17 from "./pages/TA17";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <h1>TA 16 - Navegación entre páginas</h1>
        <p>
          IMPORTANTE: En la sección home podrán ver los ejercicios del TA 1 al TA
          15 ya que el TA 16 es la creación del enrutamiento.
        </p>
        <p>
          IMPORTANTE: Las rutas About y Contact están protegidas por la política del TA 18, para poder acceder a las mismas tendrán que loguearse con el botón de login :D
          PD: La contraseña es "root"
        </p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/TA17">TA 17</Link>
          {!isAuthenticated && <Link to="/login">Login</Link>}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Rutas protegidas */}
          <Route
            path="/about"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={<About />}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                element={<Contact />}
              />
            }
          />

          <Route path="/TA17" element={<TA17 />} />
          <Route path="/TA17/product/:id" element={<Product />} />

          {/* Ruta de Login */}
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;