import React from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
function ProductPage({ data }) {
  const { id } = useParams();
  const product = data.find((p) => p.id === parseInt(id));
  console.log(product);
  if (!product) return "Error";

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <button className="add-to-cart">Adaugă în coș</button>
          <div className="product-info">
            <p>
              <strong>Brand:</strong> {product.category}
            </p>
            <p>
              <strong>Disponibilitate:</strong> În stoc
            </p>
            <p>
              <strong>SKU:</strong> {product.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
