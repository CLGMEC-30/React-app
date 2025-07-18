// src/pages/Home.jsx
import React from "react";
import { useProductContext } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import "./Home.css";

function StarRating({ rating }) {
  return (
    <div className="stars">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
  );
}

export default function Home() {
  const { products } = useProductContext();
  const { addToCart } = useCart();

  const categories = ["smartphone", "accessories", "laptop", "groceries"];

  return (
    <div className="home-container">
      <h1>Welcome to Our Store</h1>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category.toUpperCase()}</h2>
          <div className="product-list">
            {products
              .filter((p) => p.category === category)
              .map((product) => (
                <div className="product-card" key={product.id}>
                  <h3>{product.name}</h3>
                  <StarRating rating={product.rating} />
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
