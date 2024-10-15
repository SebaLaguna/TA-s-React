import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Información de contacto.</p>
      <Link to="/">Volver a Home</Link>
      <br />
      <Link to="/about">Ir a About</Link>
    </div>
  );
};

export default Contact;