import React from "react";
import { useParams, Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const products = {
    1: { name: "Producto 1", description: "Descripción del producto 1" },
    2: { name: "Producto 2", description: "Descripción del producto 2" },
    3: { name: "Producto 3", description: "Descripción del producto 3" },
  };

  const product = products[id];

  return (
    <div>
      <nav>
        <Link to="/TA17/product/1">Producto 1</Link>
        <Link to="/TA17/product/2">Producto 2</Link>
        <Link to="/TA17/product/3">Producto 3</Link>
      </nav>
      <h2>{product ? product.name : "Producto no encontrado"}</h2>
      <p>{product ? product.description : "No hay descripción disponible."}</p>

      {/* Navegación entre productos */}
    </div>
  );
};

export default Product;
