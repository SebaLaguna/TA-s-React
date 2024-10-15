import React from 'react';
import { Link } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, element }) => {
  if (isAuthenticated) {
    return element; 
  } else {
    return (
      <div>
        <h2>Contenido protegido</h2>
        <p>Debes <Link to="/login">iniciar sesión</Link> para ver este contenido.</p>
      </div>
    );
  }
};

export default ProtectedRoute;
