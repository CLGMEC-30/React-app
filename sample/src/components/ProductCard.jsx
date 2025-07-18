import React from "react";
import { useCart } from "../context/CartContext";


export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        {/* Replace src with actual image path later */}
        <img
          src={product.image || "https://via.placeholder.com/200"}
          alt={product.name}
          style={styles.image}
        />
      </div>
      <div style={styles.details}>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.description}>{product.description}</p>
        <p style={styles.price}>${product.price}</p>
        <button style={styles.button} onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth: "250px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: "100%",
    height: "200px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  details: {
    padding: "16px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "0 0 8px",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "8px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#333",
  },
  button: {
    padding: "10px 14px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
