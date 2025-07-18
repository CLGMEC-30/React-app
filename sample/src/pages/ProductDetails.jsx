import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-details">
      <img
        src={product.image || "https://via.placeholder.com/300x200?text=No+Image"}
        alt={product.title}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ₹{product.price.toLocaleString()}</p>
      <p><strong>Rating:</strong> ⭐ {product.rating}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
