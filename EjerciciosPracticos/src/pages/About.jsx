import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Información sobre la aplicación.</p>
      <Link to="/">Volver a Home</Link>
      <br />
      <Link to="/contact">Ir a Contact</Link>
    </div>
  );
};

export default About;