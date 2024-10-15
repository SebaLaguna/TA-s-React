import React from "react";
import { Link } from "react-router-dom";

const TA17 = () => {
  return (
    <div>
      <nav>
        <Link to="/TA17/product/1">Producto 1</Link>
        <Link to="/TA17/product/2">Producto 2</Link>
        <Link to="/TA17/product/3">Producto 3</Link>
      </nav>
      <h2>TA 17 - Seleccione un Producto</h2>
    </div>
  );
};

export default TA17;
